import React, { useState } from 'react'
import './RewardsFavorite.css'
import { nanoid } from 'nanoid'

function RewardsFavorite() {

    const data = [
        {
            id: 1,
            btn: 25,
            img: 'https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png',
            title: "Customize your drink",
            description: "Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup."
        },
        {
            id: 2,
            btn: 100,
            img: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png",
            title: "Brewed hot or iced coffee or tea, bakery item, packaged snack and more",
            description: "Treat yourself to an iced coffee, buttery croissant, bag of chips and more."
        },
        {
            id: 3,
            btn: 250,
            img: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png",
            title: "Handcrafted drink (Cold Brew, lattes and more) or hot breakfast",
            description: "Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us."
        },
        {
            id: 4,
            btn: 300,
            img: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png",
            title: "Sandwich, protein box or at-home coffee",
            description: "Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®"
        },
        {
            id: 5,
            btn: 400,
            img: "https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png",
            title: "Select Starbucks® merchandise",
            description: "Take home a signature cup, drink tumbler or your choice of coffee merch up to $20."
        },
    ]
    const [star, setStar] = useState(data[0])
    return (
        <div className='rewards-favorite'>
            <div>
                <h3>Get your favorites for free</h3>
                <div className='dflex containerr'>
                    {data.map(item => {
                        return <RewardsFavoriteBtn key={nanoid()}
                            {...item}
                            data={data}
                            star={star}
                            setStar={setStar} />
                    })}
                </div>
                <RewardsFavoriteItem star={star} />
            </div>
        </div>
    )
}

export default RewardsFavorite

function RewardsFavoriteBtn({ id, btn, data, star, setStar }) {
    const getContent = (arg) => {
        setStar(data.find(item => item.id === arg))
    }
    return (
            <button
                className={id === star.id ? 'selected-content favorite-btn ' : "favorite-btn"}
                onClick={() => getContent(id)}>
                {btn}
                <span className="favorite-star">★</span>
            </button>
    )
}

function RewardsFavoriteItem({ star }) {
    return (
        <div className='favorite-item'>
            <div className='favorite-content'>
                <div className='content-side'>
                    <img src={star.img} alt="" />
                </div>
                <div className='content-side'>
                    <h4>{star.title}</h4>
                    <p>{star.description}</p>
                </div>
            </div>
        </div>
    )
}