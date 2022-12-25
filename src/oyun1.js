import React, { useState } from 'react';
import tas from './image/tas.png';
import makas from './image/makas.png';
import kagit from './image/kagit.png';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

let score=0;
export const Normal=()=> {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const navigation=useNavigate();

  const choices = ['rock', 'paper', 'scissors'];

  function handleClick(choice) {
    setPlayerChoice(choice);
    setComputerChoice(choices[Math.floor(Math.random() * 3)]);
    decideWinner();
  }

  function decideWinner() {
    if (playerChoice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      setResult('You win!');
      score++
    } else {
      setResult('Computer wins.');
    }
  }

  return (
    <div>
      <div>
        <h1>NORMAL OYUN</h1>
      <img src={tas}  alt="logo" onClick={() => handleClick('rock')}/>
      <img src={kagit}  alt="logo" onClick={() => handleClick('paper')}/>
      <img src={makas}  alt="logo" onClick={() => handleClick('scissors')}/>
      </div>
      {playerChoice && (
        <div>
          You chose {playerChoice}. Computer chose {computerChoice}.{' '}
          {result}.
          <div>
            Score:{score}
          </div>
          
          </div>
      )}
      <Button onClick={()=>navigation('/')}>Home</Button>
    </div>
    
  );
}


