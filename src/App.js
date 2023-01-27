import { useState } from 'react';
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
  //functions
  const
  closeModal = ()=>  setRulesModal(false),
  handlePick = type=> {
    console.log(type)
    setPick1(type);
    setPick2(['', 'rock', 'paper', 'scissors'][Math.floor(Math.random()*3)+1]);
  },
  handleReset = ()=> {
    setPick1(undefined);
    setPick2(undefined);
  }
  return (
    <div className="App">
      <Header/>
      {
        !pick1 ? <PlayComp handlePick={handlePick}/> : <PlayComp2  pick1={pick1} pick2={pick2} handleReset={handleReset}/>
      }
      <div className='dummy'></div>
      <div className='rulesButton' onClick={()=> setRulesModal(true)}>RULES</div>
      {rulesModal ? <Rules closeModal={closeModal} /> : null}
    </div>
  );
}

export default App;
