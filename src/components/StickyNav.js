import React, { Component } from 'react';
import './stickyNav.css';

class StickyNav extends Component {
    render (){
        return (
            <nav className="header-nav sticky">
                <ul className="header-ul">
                    <li>Home</li>
                    <li>Characters</li>
                    <li>Planets</li>
                    <li>Jedi Order</li>
                </ul>
            </nav>
        );
    }
}

export default StickyNav;