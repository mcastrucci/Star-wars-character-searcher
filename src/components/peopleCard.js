import React from 'react';
import './people-card.css';

export const PeopleCard = ({people}) => {
    let props = [];
    for (const key in people) {
        props.push(key);
    }
    return (
        <div className='people-card'>
            {props.map((propName)=>{
                return (
                    <h3>{propName}: {people[propName]}</h3>
                );
            })}
        </div>
    );
};