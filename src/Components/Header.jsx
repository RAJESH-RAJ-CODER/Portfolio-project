import React from 'react';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>My Name Rjesh Raj</h1>
                <Typed
                className="typed-text"
                string={["web design","Java Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">contact Me</a>
            </div>
        </div>
        
    );
}

export default Header
