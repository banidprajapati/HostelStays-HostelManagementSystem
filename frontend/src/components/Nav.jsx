// Nav.jsx
import React from 'react';

const Nav = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', background: '#f0f0f0' }}>
            <div>
                <h3><strong>Hostel <br/> Stays</strong></h3>
            </div>

            <div>
                <h3><strong>Login/Signup</strong></h3>
            </div> 
        </nav>
    );
}

export default Nav;
