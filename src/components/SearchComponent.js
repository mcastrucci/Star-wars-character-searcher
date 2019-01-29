import React from 'react';
import { People } from '../Objects/People';
import { PeopleCard } from './peopleCard';
import './searchComponent.css';

const SearchComponent = ({searchObject}) => {
    let characters = [];
    for (const char of searchObject) {
        let character = new People (char);
        characters.push(character);  
    }
    return(
            <div className="search-component-div">
                {
                   characters.map((char, i) => {
                    return (
                      <PeopleCard key={i} people={char}/>
                    );
                  })
                }
            </div>
    )
}

export default SearchComponent;