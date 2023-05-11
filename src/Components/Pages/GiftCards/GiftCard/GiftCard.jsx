import React, { useContext} from 'react'
import { MainContext } from '../../../Context/Context';
import { nanoid } from 'nanoid';
import { Link, NavLink} from 'react-router-dom';
import './GiftCard.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function GiftCard() {
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


    return (
        <div className='gift-cards'>

            {data.slice(0, 1).map(item => {
                return <div key={nanoid()}>
                    <div className='gift-card containerr'>
                        <h3>{item.category}</h3>
                        <div><Link to={`category/${item.category}`.toLowerCase().split(' ').join('-')}> {item.see}</Link></div>
                    </div>
                    <div className='gift-carousel'>
                        <Carousel draggable={true} responsive={responsive} >
                            {(item.cards).map(item => (
                                <NavLink className='card' key={nanoid()}><img className='carousel-item' src={item} alt="" />
                                </NavLink>
                            ))}
                        </Carousel>
                    </div>

                </div>
            })}
        </div>
    )
}

export default GiftCard