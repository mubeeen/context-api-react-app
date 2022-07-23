import React from "react"
import { Link } from 'react-router-dom';
import './styles.css';

export const Header = () => {
    return (
        <>
            <span className="header">React Context API Tutorials</span>
            <ul className="nav">
                <li className="prod">
                    <Link to="/">Home</Link>
                </li>   
                <li>
                    <Link to="/cart">Cart</Link> 
                </li>
            </ul>
        </>
    )
}