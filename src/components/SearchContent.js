import React from 'react';
import SearchComponent from './SearchComponent';

const SearchContent = ({ searchResults }) => {
    return(
        <SearchComponent searchObject={searchResults}/>
    )
}

export default SearchContent;