import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'


const Addy = () => {
    const [formData, setFormData] = useState({
        address: '',
        isBillingAddress: false,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h3>Sign UP TO GET MAILED INFORMATION ABOUT NEW PRODUCTS</h3>
                <h5>(NOW WITH 60% LESS DRONE STRIKES)</h5>
                <label htmlFor="address">HOVEL YOU RESIDE AT:</label>
                <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="billingAddress">BASED TRISTATE AREA:</label>
                <input
                    type="radio"
                    id="isBillingAddress"
                    checked={formData.isBillingAddress}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="shippingAddress">GOD FORSAKEN FLY OVER STAKE:</label>
                <input
                    type="radio"
                    id="isBillingAddress"
                    checked={!formData.isBillingAddress}
                    onChange={handleInputChange}
                />
            </div>

        
            <button className="btn btn-danger">GIVE IT TOO US
            
            </button>


        </form>
    );
};

export default Addy;