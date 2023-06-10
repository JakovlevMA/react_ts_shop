import React from 'react';
import '../App.css'

const Header = () => {
    return (
        <header>
            <div className='nav'>
                <span className='logotype'>Name shop</span>
                <ul className='navigations'>
                    <li>About us</li>
                    <li>Contacts</li>
                    <li>My profile</li>
                    <li>Reviews</li>
                </ul>
            </div>
        </header>
    );
};

export default Header;