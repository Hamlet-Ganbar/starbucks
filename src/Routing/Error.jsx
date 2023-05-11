import './Error.css'
import errorCofe from '../Assets/errorcofe.png'
import { Link} from 'react-router-dom'

function Error() {

    return (
        <div className='error-page'>
            <div className='containerr'>
                <h3>We can't find the page you're looking for.</h3>
                <p>Don't worry, it's just a little spilled Chai Tea Latte. Let us help you clean that up and find your way! Mop up the spill to reveal something underneath.</p>
                <div>
                    <div><img src={errorCofe} alt="" /></div>
                    <div>
                        <p>Would you like to:</p>
                        <ul>
                            <li><Link to='/menu'>Place an order</Link></li>
                            <li><Link to="/gift">Check a gift Card</Link></li>
                            <li><Link to="/">Return to home page</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error