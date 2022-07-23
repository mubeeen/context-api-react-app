import {React, useContext} from "react"
import { Link } from 'react-router-dom';
import { MyCart } from "../contexts/CartContext";
import './styles.css';

export const Header = () => {
    const { cart } = useContext(MyCart);
    return (
        <>
            <span className="header">React Context API Tutorials</span>
            <ul className="nav">
                <li>
                    <Link to="/">Home</Link>
                </li>   
                <li>
                    <Link to="/cart">Cart({cart.length})</Link> 
                </li>
            </ul>
        </>
    )
}