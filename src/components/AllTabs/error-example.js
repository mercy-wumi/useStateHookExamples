import React, { useState } from 'react';

const ErrorExample = () => {
    const [language, setLanguage] = useState('English');
    const handleClick = () => {
        setLanguage('Spanish');
    }
    return (
        <div className='container'>
            <h2>{language}</h2>
            <button className='btn' onClick={handleClick}>Change Language</button>
        </div>

    )

};

export default ErrorExample;
