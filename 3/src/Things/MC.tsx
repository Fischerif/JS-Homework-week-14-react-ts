import React, { useState } from 'react';  //IMPORT MATH FROM REACT

const Card: React.FC = () => {
    const [money, setMoney] = useState(5);



    const fire = () => {
        setMoney(money - 1); //MONEY -1
        
    };

if (money < 0) {
    alert('MY HOVERCRAFT IS OUT OF EELS') //ALERT IF IT GOES NEGATIVE
}


    return (
        <div>
            <h2>FREE EEL COUPONS: {money}</h2>







            <button onClick={fire}>BURN COUPON IN FIRE</button>
    <button onClick={() => window.location.href = 'https://www.youtube.com/watch?v=4YSXNotY8QU'}>APPLY FOR FOODSTAMPS</button> 
    <button onClick={() => window.location.href = 'https://www.youtube.com/watch?v=9EsalEAXFxo'}>GO TO THE CASINO</button>




        </div>
    );
};

export default Card;