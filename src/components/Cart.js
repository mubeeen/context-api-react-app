import React, { useEffect, useState } from "react"
import { SingleProduct } from "./SingleProduct";
import './styles.css';

export const Cart = ({cart, setCart}) => {

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
                        <SingleProduct prod={prod} key={cart.id} cart={cart} setCart={setCart}/>
                    ))
                }
            </div>
        </div>
    );
}               