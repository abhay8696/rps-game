import { useEffect, useState } from 'react';
//components
import Header from './components/header';
import PlayComp from './components/playComp';
import PlayComp2 from './components/playComp2';
import Rules from './components/rules';
import SheldonComp from './components/sheldonComp';
//styles
import './styles/App.css';

function App() {
  //states
  const [rulesModal, setRulesModal] = useState(false); 
  const [pick1, setPick1] = useState();
  const [pick2, setPick2] = useState();
  const [score, setScore] = useState(0);
  const [winnerMsg, setWinnerMsg] = useState('');
  const [sheldon, setSheldon] = useState(false);
  //lifecycle
  useEffect(()=> {
    let s = +window.localStorage.getItem('score');
    if(s) setScore(s);
  }, [])
  //functions
  const
  closeModal = ()=>  setRulesModal(false),
  handlePick = playerPick=> {
    let options, housePick;
    if(!sheldon){
      options = ['', 'rock', 'paper', 'scissors'];
      housePick = options[Math.floor(Math.random()*3)+1];
    }
    if(sheldon){
      options = ['', 'rock', 'paper', 'scissors', 'spock', 'lizard'];
      housePick = options[Math.floor(Math.random()*5)+1];
    }
    
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
        if(housePick === 'paper' || housePick === 'spock'){
          a = 'YOU LOSE :('
        }else a = 'YOU WIN!';
    }
    else if(playerPick === 'paper'){
      if(housePick === 'scissors' || housePick === 'lizard'){
        a = 'YOU LOSE :('
      }else a = 'YOU WIN!';
    }
    else if(playerPick === 'scissors'){
      if(housePick === 'spock' || housePick === 'rock'){
        a = 'YOU LOSE :('
      }else a = 'YOU WIN!';
    }
    else if(playerPick === 'spock'){
      if(housePick === 'lizard' || housePick === 'paper'){
        a = 'YOU LOSE :('
      }else a = 'YOU WIN!';
    }
    else if(playerPick === 'lizard'){
      if(housePick === 'rock' || housePick === 'scissors'){
        a = 'YOU LOSE :('
      }else a = 'YOU WIN!';
    }
    return a;
  },
  handleReset = ()=> {
    setPick1(undefined);
    setPick2(undefined);
  },
  displayOriginal = ()=> {
    if(!pick1) return <PlayComp sheldon={sheldon} handlePick={handlePick}/> 
    return <PlayComp2 sheldon={sheldon} pick1={pick1} pick2={pick2} handleReset={handleReset} winnerMsg={winnerMsg}/>
  },
  displaySheldon = ()=> {
    return <SheldonComp sheldon={sheldon} handlePick={handlePick}/> 
  },
  handleSheldon = ()=> {
    setSheldon(!sheldon);
    handleReset();
  }
  
  return (
    <div className="App">
      <Header score={score}/>
      <div className='container'>
        { displayOriginal() }
        { displaySheldon() }
      </div>
      <div className='dummy' onClick={()=> handleSheldon()}>
        <button>SHELDON</button>
      </div>
      <div className='rulesButton' onClick={()=> setRulesModal(true)}>RULES</div>
      <Rules closeModal={closeModal} rulesModal={rulesModal}/>
    </div>
  );
}

export default App;
