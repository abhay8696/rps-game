import { useEffect, useRef, useState } from 'react';
//components
import Header from './components/header';
import PlayComp from './components/playComp';
import PlayComp2 from './components/playComp2';
import Rules from './components/rules';
import SheldonComp from './components/sheldonComp';
import RandomImg from './components/randomImg';
//styles
import './styles/App.css';
//assets
import sheldon1Img from './assets/images/sheldon.png';
import sheldon2Img from './assets/images/sheldon2.png';
import sheldon3Img from './assets/images/sheldon3.png';
import sheldon4Img from './assets/images/sheldon4.png';
import sheldon5Img from './assets/images/sheldon5.png';

function App() {
  //states
  const [rulesModal, setRulesModal] = useState(false); 
  const [pick1, setPick1] = useState();
  const [pick2, setPick2] = useState();
  const [score, setScore] = useState(0);
  const [winnerMsg, setWinnerMsg] = useState('');
  const [sheldon, setSheldon] = useState(false);
  const [clickedPlayAgain, setClickedPlayAgain] = useState(false);
  const [sheldonImg, setSheldonImg] = useState(<img src={sheldon2Img} className='sheldonImg'/>);
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
    setClickedPlayAgain(true); //to avoid trigger of disappering animation
  },
  displayOriginal = ()=> {
    if(!pick1) return <PlayComp sheldon={sheldon} handlePick={handlePick} clickedPlayAgain={clickedPlayAgain}/> 
    // return <PlayComp2 sheldon={sheldon} pick1={pick1} pick2={pick2} handleReset={handleReset} winnerMsg={winnerMsg}/>
  },
  displaySheldon = ()=> {
    if(!pick1)  return <SheldonComp sheldon={sheldon} handlePick={handlePick} clickedPlayAgain={clickedPlayAgain}/> 
    // return <PlayComp2 sheldon={sheldon} pick1={pick1} pick2={pick2} handleReset={handleReset} winnerMsg={winnerMsg}/>
  },
  handleSheldon = ()=> {
    setSheldon(!sheldon);
    setPick1(undefined);
    setPick2(undefined);
    setClickedPlayAgain(false);
  }
  
  
  return (
    <div className="App">
      <Header score={score}/>
      <div className='container'>
        { displayOriginal() }
        { displaySheldon() }
        {
          pick1 ? 
          <PlayComp2 sheldon={sheldon} pick1={pick1} pick2={pick2} handleReset={handleReset} winnerMsg={winnerMsg}/>
          :null
        }
      </div>
      <div className='dummy'>
        {/* <button>SHELDON</button> */}
      </div>
      <div className='switchGame'>
        <RandomImg />
        <div className='buttons' onClick={()=> handleSheldon()}>
         { !sheldon ? 'PLAY SHELDON WAY' : 'PLAY NORMAL WAY'}
        </div>
      </div>
      <div className='rulesButton' onClick={()=> setRulesModal(true)}>
        <div className='buttons'>RULES</div>
      </div>
      <Rules closeModal={closeModal} rulesModal={rulesModal} sheldon={sheldon}/>
    </div>
  );
}

export default App;

//https://www.pngwing.com/en/free-png-yumlm/download
