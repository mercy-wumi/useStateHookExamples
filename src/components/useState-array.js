import React, { useState } from 'react';
import { data } from '../data';

const UseStateArray = () => {
    const [people, setPeople] = useState(data)
    const handleRemove = (id) => {
        let filteredPeople = people.filter(person => person.id !== id);
        setPeople(filteredPeople)
    }
    return (
        <div className='container'>
            {people.map(person => {
                const { id, name } = person
                return (
                    <div key={id} className='item'>
                        <h4>{name}</h4>
                        <button onClick={() => handleRemove(id)}>remove</button>
                    </div>
                )
            })}
            <button className='btn' onClick={() => setPeople([])}>clear items</button>
        </div>
    );
};

export default UseStateArray;
