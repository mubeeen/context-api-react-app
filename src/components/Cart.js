import React, { useEffect, useState, useContext } from "react"
import { MyCart } from "../contexts/CartContext";
import { SingleProduct } from "./SingleProduct";
import './styles.css';

export const Cart = () => {
    const { cart, setCart } = useContext(MyCart);
    const [total, setTotal] = useState();

    useEffect(()=>{
        setTotal(cart.reduce((acc,curr)=> acc + Number(curr.price), 0))
    },[cart])

    return (
        <div>
            <span style={{fontSize: 30}}>My Cart</span>
            <br />
            <span style={{fontSize: 30}}>Total: Rs.{total}</span>
            <div className="productContainer"> 
                {
                    cart.map((prod) => (
                        <SingleProduct prod={prod} key={cart.id}/>
                    ))
                }
            </div>
        </div>
    );
}               