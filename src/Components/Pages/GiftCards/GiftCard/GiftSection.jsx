import React, { useContext } from 'react'
import { MainContext } from '../../../Context/Context';
import Carousel from 'react-multi-carousel'
import { nanoid } from 'nanoid';
import { Link} from 'react-router-dom';

function GiftSection() {
    

    const { data } = useContext(MainContext)
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4.3,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2

        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
 
    const width = window.innerWidth
    return (
        <div className='gift-cards'>
            {data.slice(1).map(item => {
                return <div key={nanoid()}>
                    <div className='gift-card containerr'>
                        <h3>{item.category}</h3>
                        <div><Link to={`category/${item.category}`.toLowerCase().split(' ').join('-')}>{width>1024 ? `${item.see}` : 'See all'}</Link></div>
                    </div>
                    <div className='gift-carousel'>
                        <Carousel
                            responsive={responsive}>
                            {(item.cards).map(item => {
                                return <div key={nanoid()} className="card"><img className='carousel-item' src={item} alt="" />
                                </div>
                            })}
                        </Carousel>
                    </div>
                </div>
            })}
        </div>
    )
}

export default GiftSection