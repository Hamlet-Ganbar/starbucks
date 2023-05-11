import React from 'react'
import './RewardsFooter.css'
import { Link } from 'react-router-dom'

function RewardsFooter() {
    return (
        <div className='rw-f'>
            <div className='rw-footer-bg'>
                <div className='containerr reward-footer'>
                    <ul>
                        <li>At participating stores. Restrictions apply.</li>
                        <li>* Excludes taxes and gratuities. At participating stores. Some restrictions apply. Flights purchased close to departure may not earn double Stars.</li>
                        <li>Stars and miles may not be earned on purchases of alcohol, Starbucks Cards and Starbucks Card reloads. For details, <Link className='question-link'><span>visit deltastarbucks.com/terms</span>
                            <svg className='link-icon' aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path></svg>
                        </Link> </li>
                    </ul>
                    <div  className='dflex'>
                        <div className='rw-terms'>
                            <h4>EARNING STARS</h4>
                            <ul>
                                <li>Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.</li>
                                <li>Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.</li>
                                <li>Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</li>
                            </ul>
                            <h4>BENEFITS</h4>
                            <ul>
                                <li>Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</li>
                            </ul>
                        </div>

                        <div className='rw-terms'>
                            <h4>TERMS OF USE</h4>
                            <ul>
                                <li>For full program details visit <Link className='question-link'><span>
                                    starbucks.com/rewards/terms
                                </span>
                                    <svg className='link-icon' aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path></svg>
                                </Link></li>
                                <li>Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement for more details.</li>
                                <li>Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the <Link className='question-link'> <span>Starbucks Store Locator</span>
                                        <svg className='link-icon' aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path></svg>
                                    </Link>and search for locations honoring “Redeem Rewards”.</li>
                                    <li>Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</li>
                            </ul>
                            <h4>REDEEMING REWARDS</h4>
                            <ul>
                                <li>Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RewardsFooter