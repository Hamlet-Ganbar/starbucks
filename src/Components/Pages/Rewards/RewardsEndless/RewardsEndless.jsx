import "./RewardsEndless.css"
import { nanoid } from 'nanoid'

function RewardsEndless() {
    const data = [
        {
            img: "https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg",
            title: "Fun freebies",
            description: "Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
        },
        {
            img: "https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg",
            title: "Order & pay ahead",
            description: "Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores"
        },
        {
            img: "https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg",
            title: "Get to free faster",
            description: "Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
        },
    ]
    return (
        <div className='endless containerr'>
            <h3>Endless Extras</h3>
            <p>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
            <div className='endless-flex'>
                {data.map(item => {
                    return <RewardsEndlessItem key={nanoid()} {...item} />
                })}
            </div>
        </div>
    )
}

export default RewardsEndless

function RewardsEndlessItem({ img, title, description }) {
    return (
        <div className='endless-item'>

            <img src={img} alt="" />

            <div className='endless-content'>
                <h4>{title}</h4>
                <p>{description}</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}