import React, { useState } from 'react';

const UseStateBasics = () => {
    const [title, setTitle] = useState('Fetching data using Axios');
    const handleClick = () => {
        if (title === 'Fetching data using Axios') {
            setTitle('Git tutorial');
        }
        else {
            setTitle('Fetching data using Axios')
        }
    }
    return (
        <div className='container'>
            <h2>{title}</h2>
            <button className='btn' onClick={handleClick}>Articles</button>
        </div>
    );
};

export default UseStateBasics;
