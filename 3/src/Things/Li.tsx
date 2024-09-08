
import { useState } from 'react';

const Li = () => {
    const [money, setMoney] = useState(100); // Initialize the money variable with a value of ₽100


   
    
    const products = [
        {
            id: 1,
            name: 'LAND GULL',
            image: 'https://i.ytimg.com/vi/lZNUE5cIZ70/maxresdefault.jpg',
            price: 55.99,
        },
        {
            id: 2,
            name: 'FILTH DRINK',
            image: 'https://i.ytimg.com/vi/_7jVLp-n9ww/maxresdefault.jpg',
            price: 56.99,
        },
        {
            id: 3,
            name: 'BAG OF FILTH',
            image: 'https://i.ytimg.com/vi/Wmyxkj-pmEc/maxresdefault.jpg',
            price: 64.99,
        },
    ];

    const handleBuy = (price: number) => {
        setMoney((prevMoney) => prevMoney - price); // Subtract the price from the money variable
    };

    return (
        <div>
            <h2>Money: ${money}</h2> {/* THIS SHOWS CURRENT BALANCE */}
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.image} />
                    <h3>{product.name}</h3> {/* FORMATTING */}
                    <p>${product.price}</p>
                    <button onClick={() => handleBuy(product.price)}>Buy</button> 
                </div>
            ))}
        </div>
    );
};







export default Li;

