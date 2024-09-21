import React, { useState } from 'react';  //IMPORT MATH FROM REACT


const Card: React.FC = () => {
    const [money, setMoney] = useState(5);
    const [phoneNumbers, setPhoneNumbers] = useState<string[]>([]);



    const fire = () => {
        setMoney(money - 1); //MONEY -1
        
    };

if (money < 0) {
    alert('MY HOVERCRAFT IS OUT OF EELS') //ALERT IF IT GOES NEGATIVE
}


    return (/////HEADER followed by buttons, buttons are not bootstrappppp
        <div>
            <h2>FREE EEL COUPONS: {money}</h2>







            <button onClick={fire}>BURN COUPON IN FIRE</button>
    <button onClick={() => window.location.href = 'https://www.youtube.com/watch?v=4YSXNotY8QU'}>TRADE ORGANS ON THE STOCK MARKET</button> 
    <button onClick={() => window.location.href = '/about'}>GO TO THE CASINO</button>
    <br>
    </br>
<h2>GIVE US YOUR EXBOYFRIENDS CELL PHONE NUMBER FOR 3 FREE EELS</h2> 

<form onSubmit={(e) => {///I lost two hour AFTTER accidentally losing this bracket
    e.preventDefault();/////i tried really hard to do something with this data i was going to take this in  a radically different direction
    const phoneNumber = (e.target as HTMLFormElement).elements[0] as HTMLInputElement;
    setPhoneNumbers([...phoneNumbers, phoneNumber.value]);
    setMoney(money + 3);
}}>






    <input type="text" placeholder="Enter phone number" required />
    <button type="submit">Submit</button>
</form>





<ul>
    {phoneNumbers.map((number: string, index: number) => (////// THANK GOD (Alexander McQueen)I CAN GO BACK TO LEARNING CLO NOW THAT IS DONE
        <li key={index}>{number}</li>
       
    ))}
</ul>


        </div>

    );
};

export default Card;