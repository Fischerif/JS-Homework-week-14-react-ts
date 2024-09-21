import React, { useState } from 'react';///???? uses React and useState




type Choice = 'rock' | 'paper' | 'scissors'; ////it was orginally going to be SEAMINE HANDGUN DRESS SHEARS 
const choices: Choice[] = ['rock', 'paper', 'scissors'];





const getRandomChoice = (): Choice => {
return choices[Math.floor(Math.random() * choices.length)];
};////YELLOW

const determineWinner = (playerChoice: Choice, computerChoice: Choice): string => {
    if (playerChoice === computerChoice) return 'draw';



if (
        (playerChoice === 'rock' && computerChoice === 'scissors') || ////I HAD ORGINALLY INCLUDED A BUNCH OF ILLISTRATIONS OF OLD TIMEY CHINESE OPIUM DENS ALONGSIDE ALL OF THIS 
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
) {
        return 'player'; }
    return 'computer';
};









const Roul: React.FC = () => {
const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
const [result, setResult] = useState<string | null>(null);
const [bet, setBet] = useState<number>(0);
const [balance, setBalance] = useState<number>(100);

const handleChoice = (choice: Choice) => {
if (bet <= 0 || bet > balance) {
            alert('Please place a valid bet.');
            return;
        }

        const computerChoice = getRandomChoice();
        const winner = determineWinner(choice, computerChoice);

        setPlayerChoice(choice);
        setComputerChoice(computerChoice);
        setResult(winner);

        if (winner === 'player') {
            setBalance(balance + bet*1.5);///I WASNT SURE HOW THIS SHOULD pay out
        } else if (winner === 'computer') {
            setBalance(balance - bet);
        }
    };

    return (
        <div>
            <h1>Rock Paper Scissors</h1>
            <div>
                <label>
                    Bet Amount:
                    <input
                        type="number"
                        value={bet}
                        onChange={(e) => setBet(Number(e.target.value))}
                    />
                </label>
            </div>
            <div>
   <button  style={{ fontFamily: 'Courier New, Courier, monospace' }} onClick={() => handleChoice('rock')}>Rock</button>
    <button style={{ fontFamily: 'Courier New, Courier, monospace' }} onClick={() => handleChoice('paper')}>Paper</button>
   <button style={{ fontFamily: 'Courier New, Courier, monospace' }} onClick={() => handleChoice('scissors')}>Scissors</button>
            </div>


 {playerChoice && computerChoice && (
                <div>
             <p style={{ fontFamily: 'Courier New, Courier, monospace' }}>YOU CHOSE: {playerChoice}</p>
             <p style={{ fontFamily: 'Courier New, Courier, monospace' }}>CHICKEN CHOSE: {computerChoice}</p>
             <p style={{ fontFamily: 'Courier New, Courier, monospace' }}> {result === 'draw' ? 'ALL BETS OFF' : result === 'player' ? 'WOW YOU BEAT A CHICKEN' : '   YOU LOST TO A CHICKEN'}</p>
                </div>
            )}
            <div>

                <p style={{ fontFamily: 'Courier New, Courier, monospace' }}>CREDITS: ₽{balance}</p>
            </div>
        </div>
    );
};

export default Roul;
    
