import { createContext, useState } from "react";

export const MyCart = createContext()

const CartContext = ({children}) => {
    const [cart, setCart] = useState([]);

    return (
        <MyCart.Provider value={{ cart, setCart }}>
            {children}
        </MyCart.Provider>
    );  
}

export default CartContext; 