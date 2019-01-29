import React, { Component } from 'react';
import StickyNav from './StickyNav';
import './header.css'
import cover from './star_wars_cover.PNG';

class Header extends Component {
    render (){
        return(
            <header className="header-container">
                <img src={cover} alt="star Wars Cover"/>
            </header>
        )
    }
}

export default Header;