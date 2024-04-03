// Footer1.jsx
import React from 'react';

const Footer1 = () => {
    return (
        <footer style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', background: '#f0f0f0' }}>
            <div>
                <h3><strong>Support</strong></h3>
                <ul>
                    <li><a href="/help">Help Center</a></li>
                    <li><a href="/disability-support">Disability Support</a></li>
                    <li><a href="/cancellation">Cancellation</a></li>
                    <li><a href="/report-problems">Report Problems</a></li>
                </ul>
            </div>

            <div>
                <h3><strong>Other Pages</strong></h3>
                <ul>
                    <li><a href="/about-us">About us</a></li>
                    <li><a href="/blogs">Blogs</a></li>
                    <li><a href="/support">Support</a></li> 
                </ul> 
            </div>

            <div>
                <h3><strong>Contact us</strong></h3> 
                <p>
                    Phone: +977-9800000000<br/>
                    Facebook: facebook.com<br/>
                    WhatsApp: whatsapp.com
                </p>
            </div> 
        </footer>
    );
}

export default Footer1;


