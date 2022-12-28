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
        let compchoice=choices[Math.floor(Math.random() * 3)]
        setComputerChoice(compchoice);
        decideWinner(choice,compchoice);
        SetlastChoice(choice);
        setlchandle(false)
        console.log(lchandle)
        }
        else if(lastChoice===choice){
            setlchandle(true)
        }
  }

  function decideWinner(choice,compchoice) {
    if (choice === compchoice) {
      setResult("Beraberesiniz!");
    } else if (
      (choice === 'rock' && compchoice === 'scissors') ||
      (choice === 'paper' && compchoice === 'rock') ||
      (choice === 'scissors' && compchoice === 'paper')
    ) {
      setResult('Sen Kazandın!');
      score++
    } else {
      setResult('Bilgisayar Kazandı.');
    }
  }

  return (
    <div>
      <div>
      <h1>ZOR OYUN</h1>
      <img src={tas}  alt="logo" height={400} width={400} onClick={() => handleClick('rock')}/>
      <img src={kagit}  alt="logo" height={400} width={400} onClick={() => handleClick('paper')}/>
      <img src={makas}  alt="logo" height={400} width={400}  onClick={() => handleClick('scissors')}/>
      </div>
      {playerChoice && !lchandle && (
        <div>
          Senin seçimin: {playerChoice}. Bilgisayarın seçimi: {computerChoice}.{' '}
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
      <Button variant="danger" size="lg" onClick={()=>navigation('/')}>Home</Button>
    </div>
  );
}


