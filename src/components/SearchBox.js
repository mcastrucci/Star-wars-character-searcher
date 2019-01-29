import React from 'react';
import './searchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
    return(
            <div className="search-box">
                <p>Search Characters</p>
                <input type="search" onChange={searchChange}/>
            </div>
    )
}

export default SearchBox;