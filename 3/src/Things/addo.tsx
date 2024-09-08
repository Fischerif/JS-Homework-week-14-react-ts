import React, { useState } from 'react';

const Addy = () => { //FUNCTION IS ADDY FOR ADDRESS
    const [address, setAddress] = useState('');
    const [isBillingAddress, setIsBillingAddress] = useState(false);

    const handleAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => { // THIS IS ALL MODIFIED FROM A FORUM I MIGHT NOT FULLY IMPLEMNET
        setAddress(event.target.value);
    };

    const handleBillingAddressChange = () => {
        setIsBillingAddress(!isBillingAddress);
    };

    const handleSubmit = (event: React.FormEvent) => { ///THIS IS WHERE REACT IS ACTUALLY USED
        event.preventDefault();
        
    };

    return ( //BELOW THIS IS THE HTML IT HAS TWO LINES OF TEXT AN INPUT FORM AND TWO RADIO BUTTONS AND A SUBMIT BUTTON
        <form onSubmit={handleSubmit}>
            <div>
                <h3>Sign UP TO GET MAILED INFORMATION ABOUT NEW PRODUCTS</h3> 
                <h5>(NOW WITH 60% LESS DRONE STRIKES)</h5>
                <label htmlFor="address">HOVEL YOU RESIDE AT:</label>
                <input type="text" id="address" value={address} onChange={handleAddressChange} />
            </div>
            <div>
                <label htmlFor="billingAddress">BASED TRISTATE AREA:</label>
                <input type="radio" id="billingAddress" checked={isBillingAddress} onChange={handleBillingAddressChange} />
            </div>
            <div>
                <label htmlFor="shippingAddress">GOD FORSAKEN FLY OVER STAKE:</label>
                <input type="radio"  checked={!isBillingAddress} onChange={handleBillingAddressChange} />
            </div>
            <div>
           
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Addy;