import React from 'react'
import { NavLink } from 'react-router-dom'

const UseStateNav = () => {

    const navStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '1.2em',
        fontWeight: 'bold',
        cursor: 'pointer'
    }

    return (
        <div>
            <p style={{ fontWeight: 'bold', fontSize: '1.5em' }}>UseState Examples App, click to view</p>
            <nav style={navStyle}>
                <NavLink to='/useStateHookExamples/usestatearray' style={({ isActive }) => {
                    return {
                        color: isActive ? "gray" : "",
                    };
                }} >Array</NavLink >
                <NavLink to='/useStateHookExamples/usestateobject' style={({ isActive }) => {
                    return {
                        color: isActive ? "gray" : "",
                    };
                }}>Object</NavLink >
                <NavLink to='/useStateHookExamples/errorexample' style={({ isActive }) => {
                    return {
                        color: isActive ? "gray" : "",
                    };
                }}>ErrorExample</NavLink >
                <NavLink to='/useStateHookExamples/usestatebasics' style={({ isActive }) => {
                    return {
                        color: isActive ? "gray" : "",
                    };
                }}>Basics</NavLink >
            </nav>
        </div>
    )
}

export default UseStateNav