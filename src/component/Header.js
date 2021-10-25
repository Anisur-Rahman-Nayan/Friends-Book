import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
        <div className="title">
            <h1><b><i>Friends Book</i></b></h1>
        </div>
        <div>
            <nav className="navs">
                <a href="/add-friends"><i>Refresh Page</i></a>
               
            </nav>
        </div>
        </div>
    );
};

export default Header;