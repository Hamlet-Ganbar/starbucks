import './GotGiftCard.css'
import { Link } from 'react-router-dom'

function GotGiftCard() {
    return (
        <div className='got-card'>
            <div className="containerr">
                <div className='dflex get-card'>
                    <div className='dflex'>
                        <h5>Got a gift card?</h5>
                        <div className='dflex earn-btns'>
                            <p>Earns 2★Stars per $1</p>
                            <div>
                                <button className='add-reload'>Add or Reload</button>
                                <button className='check-balance'>Check Balance</button>
                            </div>

                        </div>
                    </div>
                    <div className='card-term-link'>
                        <Link className='question-link'><pre>Card Terms & Conditions</pre>
                            <svg className='link-icon' aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" ><path d="M14.75 18H7.875C6.84 18 6 17.16 6 16.125V9.25c0-1.036.84-1.875 1.875-1.875h5.11c.276 0 .5.224.5.5s-.224.5-.5.5h-5.11c-.483 0-.875.392-.875.875v6.875c0 .483.392.875.875.875h6.875c.483 0 .875-.392.875-.875V11c0-.276.224-.5.5-.5s.5.224.5.5v5.125c0 1.035-.84 1.875-1.875 1.875zM14 6.5c0-.276.224-.5.5-.5h3c.276 0 .5.224.5.5v3c0 .276-.224.5-.5.5s-.5-.224-.5-.5V7.72l-4.66 4.74c-.19.196-.507.2-.704.005-.197-.193-.2-.51-.006-.707L16.307 7H14.5c-.276 0-.5-.224-.5-.5z"></path></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GotGiftCard