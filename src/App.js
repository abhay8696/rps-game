import { useEffect, useState } from 'react';
//components
import Header from './components/header';
import PlayComp from './components/playComp';
import PlayComp2 from './components/playComp2';
import Rules from './components/rules';
//styles
import './styles/App.css';

function App() {
  //states
  const [rulesModal, setRulesModal] = useState(false); 
  const [pick1, setPick1] = useState();
  const [pick2, setPick2] = useState();
  const [score, setScore] = useState(0);
  const [winnerMsg, setWinnerMsg] = useState('');
  //lifecycle
  useEffect(()=> {
    let s = +window.localStorage.getItem('score');
    if(s) setScore(s);
  }, [])
  //functions
  const
  closeModal = ()=>  setRulesModal(false),
  handlePick = playerPick=> {
    let housePick = ['', 'rock', 'paper', 'scissors'][Math.floor(Math.random()*3)+1]
    setPick1(playerPick);
    setPick2(housePick);
    let whoWon = decideWinner(playerPick, housePick);
    setWinnerMsg(whoWon);
    if(whoWon === 'YOU WIN!'){
      window.localStorage.setItem('score', score+1)
      setScore(score+1);
    }
  },
  decideWinner = (playerPick, housePick)=> {
    let a;
    if(playerPick === housePick) return a = 'DRAW';
    // rock > scissors > paper > rock
    if(playerPick === 'rock'){
        housePick === 'paper' ? a = 'YOU LOSE :(' : a = 'YOU WIN!';
    }else if(playerPick === 'paper'){
        housePick === 'scissors' ? a = 'YOU LOSE :(' : a = 'YOU WIN!';
    }else if(playerPick === 'scissors'){
        housePick === 'rock' ? a = 'YOU LOSE :(' : a = 'YOU WIN!';
    }
    return a;
  },
  handleReset = ()=> {
    setPick1(undefined);
    setPick2(undefined);
  },
  resetScore = ()=> setScore(0);
  return (
    <div className="App">
      <Header score={score}/>
      {
        !pick1 
        ? <PlayComp handlePick={handlePick}/> 
        : <PlayComp2  pick1={pick1} pick2={pick2} handleReset={handleReset} winnerMsg={winnerMsg}/>
      }
      <div className='dummy'></div>
      <div className='rulesButton' onClick={()=> setRulesModal(true)}>RULES</div>
      {rulesModal ? <Rules closeModal={closeModal} /> : null}
    </div>
  );
}

export default App;
