import React, { useState } from 'react'; //WE IMPORRTING

const Email: React.FC = () => { //WE ARE CREATING A FUNCTION CALLED EMAIL
 const [email, setEmail] = useState('');

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

return ( //// BELOW IS THE HTML FORM IT HAS AN INPUT FORM AND A SUBMIT BUTTON
        <form onSubmit={handleSubmit}>
            <input //input form
                type="email"  //type emaik
                placeholder="SIGN UP TO BE HACKED"
                value={email} 
                onChange={handleEmailChange}
            />
            <button type="submit">Submit</button>
        </form>
 );
};

export default Email;