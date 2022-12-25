import React, { useState } from 'react';
import tas from './image/tas.png';
import makas from './image/makas.png';
import kagit from './image/kagit.png';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';





let score=0;
export const Zoroyun=()=> {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [lastChoice, SetlastChoice] = useState(null);
  const [lchandle, setlchandle] = useState(null);
  const choices = ['rock', 'paper', 'scissors'];
  const navigation=useNavigate();

  function handleClick(choice) {
        if(lastChoice!==choice){
        setPlayerChoice(choice);
        setComputerChoice(choices[Math.floor(Math.random() * 3)]);
        decideWinner();
        SetlastChoice(choice);
        setlchandle(false)
        console.log(lchandle)
        }
        else if(lastChoice===choice){
            setlchandle(true)
        }
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
      <h1>ZOR OYUN</h1>
      <img src={tas}  alt="logo" onClick={() => handleClick('rock')}/>
      <img src={kagit}  alt="logo" onClick={() => handleClick('paper')}/>
      <img src={makas}  alt="logo" onClick={() => handleClick('scissors')}/>
      </div>
      {playerChoice && !lchandle && (
        <div>
          You chose {playerChoice}. Computer chose {computerChoice}.{' '}
          {result}.
          <div>
            Score:{score}
          </div>
          </div>
        
      )}
      {lchandle && (
        <p>
          Zorlu mod da üst üste aynı butonu seçemezsin.Başka bir şey seç.
        </p>
      )}
      <Button onClick={()=>navigation('/')}>Home</Button>
    </div>
  );
}


