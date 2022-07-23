import { React, useState } from "react";
import './styles.css';
import { faker } from '@faker-js/faker';
import { SingleProduct } from "./SingleProduct";

faker.seed(100);

export const Home = ({cart, setCart}) => {
    const productArray=[...Array(20)].map(()=>(
    {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.food(),
    }))

    const [products] = useState(productArray);

    return (
        <div className="productContainer">
            { products.map((prod) => (
                <SingleProduct prod={prod} cart={cart} setCart={setCart} key={cart.id}/>
            ))}
        </div>
    );
}