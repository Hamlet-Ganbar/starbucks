import React from 'react'
import { Link } from 'react-router-dom'

function FooterEnd() {
    const date = new Date()
    return (
        <div>
            <div className="footer-end dflex">
                <div><Link>Privacy Notice</Link> <span>|</span></div>
                <div><Link>Terms of Use</Link> <span>|</span></div>
                <div><Link>Do Not Share My Personal Information</Link> <span>|</span></div>
                <div><Link>CA Supply Chain Act</Link> <span>|</span></div>
                <div><Link>Cookie Preferences</Link></div>
            </div>
            <div className='copyright'>© {date.getFullYear()} Starbucks Coffee Company. All rights reserved.</div>
        </div>
    )
}

export default FooterEnd