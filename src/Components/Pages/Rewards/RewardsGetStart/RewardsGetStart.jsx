import { nanoid } from 'nanoid'
import React from 'react'
import './RewardsGetStart.css'

function RewardsGetStart() {
    const data = [
        {
            id: 1,
            title: "Create an account",
            description: "To get started, <a href='#' >join now</a>. You can also <a href='#'>join in the app</a> to get access to the full range of Starbucks® Rewards benefits."
        },
        {
            id: 2,
            title: "Order and pay how you’d like",
            description: "Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways <a href='#'>Learn how</a>"
        },
        {
            id: 3,
            title: "Earn Stars, get Rewards",
            description: "As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
        }]
    return (
        <div className="reward-start containerr">
            <h3>Getting started is easy</h3>
            <p>Earn Stars and get rewarded in a few easy steps.</p>
            <div className='reward-content'>
                {data.map(item => {
                    return <RewardsGetStartItem key={nanoid()} {...item} />
                })}
            </div>
        </div>
    )
}

export default RewardsGetStart

function RewardsGetStartItem({ id, title, description }) {
    return (
        <div className='reward-started'>
            <div className='order'>{id}</div>
            <div>
                <h4>{title}</h4>
                <p className='start-content' dangerouslySetInnerHTML={{ __html: description }} />
            </div>

        </div>

    )
}