import React from 'react'
import './RewardsCashCards.css'
import { nanoid } from 'nanoid'

function RewardsCashCards() {
    const data = [
        {
            usd: "1★ per dollar",
            description: "Pay as you go",
            data: [{
                img: "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png",
                title: "Scan and pay separately",
                description: "Use cash or credit/debit card at the register."
            },
            {
                img: "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png",
                title: "Save payment in the app",
                description: "Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step."
            }]
        },
        {
            usd: "2★ per dollar",
            description: "Add funds in the app",
            data: [{
                img: "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png",
                title: "Preload",
                description: "To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app."
            },
            {
                img: "https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png",
                title: "Register your gift card",
                description: "Then use it to pay through the app. You can even consolidate balances from multiple cards in one place."
            }]
        }
    ]
    return (
        <div className='cash-cards'>
            <div className="containerr">
                <h3>Cash or card, you earn Stars</h3>
                <p>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
                <div className='dflex'>
                    {data.map(item => {
                        return <RewardsCashCardsItem key={nanoid()} {...item} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default RewardsCashCards

function RewardsCashCardsItem({ usd, description, data }) {
    return (
        <div className='cash-flex'>
            <div className='cash-money'>
                <h3>{usd}</h3>
                <p>{description}</p>
            </div>            
                {data.map(item => {
                    return <RewardsCashCardsContent key={nanoid()} {...item} />
                })}            
        </div>
    )
}

function RewardsCashCardsContent({ img, title, description }) {
    return (
        <div className='cash-content'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>                
            </div>
        </div>
    )
}