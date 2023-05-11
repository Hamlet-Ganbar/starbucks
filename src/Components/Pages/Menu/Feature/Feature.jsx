import React from 'react'
import './Feature.css'
import { Helmet } from 'react-helmet'
import { nanoid } from 'nanoid'

function Feature() {
    const data = [
        {
            img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83128.jpg",
            title: "Brown Sugar Oatmilk Shaken Espresso",
            description: "Starbucks® Blonde espresso is hand-shaken with brown sugar and cinnamon notes and then finished with oatmilk.",
            btn: "Order Now",
            bgcolor: "purple"
        },
        {
            img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83129.jpg",
            title: "Toasted Vanilla Oatmilk Shaken Espresso",
            description: "A hand-shaken combination of Starbucks® Blonde espresso and caramelized vanilla accents, topped with a splash of oatmilk.",
            btn: "Order Now",
            bgcolor: "purple"
        },
        {
            img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83126.jpg",
            title: "Paradise Drink Starbucks Refreshers® Beverage",
            description: "A tropical blend of real pineapple pieces, passionfruit accents and coconutmilk.",
            btn: "Order Now",
            bgcolor: "green"
        },
        {
            img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83127.jpg",
            title: "Pink Drink Starbucks Refreshers® Beverage",
            description: "Flavors of passionfruit and açaí, real strawberry pieces and coconutmilk come together.",
            btn: "Order Now",
            bgcolor: "green"
        },
        {
            img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83122.jpg",
            title: "New Cinnamon Caramel Cream Nitro Cold Brew",
            description: "Velvety Nitro Cold Brew, now with cinnamon and caramel notes and silky cold foam.",
            btn: "Order Now",
            bgcolor: "yellow"
        },
        {
            img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83123.jpg",
            title: "Vanilla Sweet Cream Nitro Cold Brew",
            description: "Vanilla-flavored sweet cream adds the finishing touch to our Nitro Cold Brew.",
            btn: "Order Now",
            bgcolor: "yellow"
        },
        {
            img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83524.jpg",
            title: "Impossible™ Breakfast Sandwich",
            description: "An Impossible™ Sausage Patty Made From Plants, a cage-free fried egg and Cheddar on a sesame ciabatta bun.*",
            btn: "Order Now",
            bgcolor: "grayblue"
        },
        {
            img: "https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83525.jpg",
            title: "Kale & Mushroom Egg Bites",
            description: "Sous-vide style cage-free eggs with kale, portabella mushrooms and Monterey Jack cheese.",
            btn: "Order Now",
            bgcolor: "grayblue"
        },


    ]
    return (
        <>
            <Helmet>
                <title>Featured</title>
            </Helmet>
            <div className='containerr'>

                <h3 className='feature-head'>Cue spring mood</h3>
                <div className='feature dflex between'>
                    {data.map(item => {
                        return <FeatureItem key={nanoid()} {...item} />
                    })}

                </div>
                <p className='feature-foot'>
                    *Impossible is a trademark of Impossible Foods, Inc. Used under license.
                </p>
            </div>
        </>
    )
}

export default Feature

function FeatureItem({ img, title, description, btn, bgcolor }) {
    return (
        <div className='feature-side'>
            <div className='feature-img'>
                <img src={img} alt="" />
            </div>
            <div className={`feature-bottom-side ${bgcolor}`}>
                <h4>{title}</h4>
                <p>{description}</p>
                <button className='gen-btn order-btn'>{btn}</button>
            </div>
        </div>
    )
}