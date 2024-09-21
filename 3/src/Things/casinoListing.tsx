import React, { useState } from 'react'; /////INSHALLAH ALL COMPUTERS WILL BE THROWN IN TO THE SEA

      


            
const Casino: React.FC = () => {
const [balance, setBalance] = useState(100);
const [bet, setBet] = useState(0);
const [message, setMessage] = useState('');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const handleBetChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     setBet(Number(e.target.value));
};
  const flipCoin = (choice: 'heads' | 'tails') => {
                 
if (bet <= 0 || bet > balance) {
setMessage('YOU ARE A FOOOL'); /// IF YOU BET MORE THAN YOU HAVE OR LESS THAN 0 YOU GET A MESSAGE
 return;
}
///// MY FUTURE WILL BE DESIDED IN FRONT OF A JANOME NOT INFRONT OF A COMPUTER AND IF IT IS INFRONT OF A COMPUTER  IT WILL BE IN CLO 3D NOT IN A BLOODY IDE 
////// TILL AFTER THE BOMBS DROP TILL IM ON MY DEATH BED ILL KEEP USING THAT THREAD 

const outcome = Math.random() < 0.499999 ? 'heads' : 'tails'; /////ITS LESS THAN 50%  SO ITS SLIGHTLY BIASED
        
 if (choice === outcome) {
    setBalance(balance + bet*2); /// IF YOU WiN YOU GET YOUR MONEY BACK TIMES TWO
    setMessage(`OH YEAH BABY ${outcome}.`); //// IF YOU WIN
        } else {
             setBalance(balance - bet);
             setMessage(`BROKE B@&>% ITS  ${outcome}.`); ///IF YOU LOSE


         }///////// I MADE A FUNCTION THAT IN THEROY WOULD  PLAYED A GIF OF A COIN FLIPPING BUT I COULDN'T GET IT TO WORK




                };





                return ( ////WE HAVE A HEADER FOLLOWED BY more Text and some buttons  using bootstrap
                    

                    <div className="container"> 
                        <h1>FLIP COINS FOR YOUR LIFE </h1>
                        <p>Balance: ${balance}</p>
                        <div className="form-group">
                            <label htmlFor="bet">Bet Amount:</label>
                            <input
                                type="number"
                                id="bet"
                                className="form-control"
                                value={bet}
                                onChange={handleBetChange}
                            />
                        </div>
                        <button className="btn btn-danger" onClick={() => flipCoin('heads')}>Bet on Heads</button> 
                        <button className="btn btn-danger" onClick={() => flipCoin('tails')}>Bet on Tails</button>
                        {message && <p>{message}</p>}
                    </div>
                );
            };

            export default Casino;

