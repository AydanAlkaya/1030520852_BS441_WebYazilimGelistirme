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
    let compchoice=choices[Math.floor(Math.random() * 3)]
    setComputerChoice(compchoice);
    decideWinner(choice,compchoice);
  }

  function decideWinner(choice,compchoice) {
    console.log(choice + " " + compchoice + " " + result)
    if (choice === compchoice) {
      setResult("Beraberesiniz!");
    } 
    else if (
      (choice === 'rock' && compchoice === 'scissors') ||
      (choice === 'paper' && compchoice === 'rock') ||
      (choice === 'scissors' && compchoice === 'paper')
    ) {
      setResult('Sen Kazandın!');
      score++
    } 
    else {
      setResult('Bilgisayar Kazandı.');
    }
  }

  return (
    <div>
      <div>
        <h1>NORMAL OYUN</h1>
      <img src={tas}  alt="logo" height={400} width={400} onClick={() => handleClick('rock')}/>
      <img src={kagit}  alt="logo" height={400} width={400} onClick={() => handleClick('paper')}/>
      <img src={makas}  alt="logo" height={400} width={400} onClick={() => handleClick('scissors')}/>
      </div>
      {playerChoice && (
        <div>
          Senin Seçimin: {playerChoice}. Bilgisayarın Seçimi: {computerChoice}.{' '}
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


