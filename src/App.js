import logo from './logo.svg';
//components
import Header from './components/header';
import PlayComp from './components/playComp';
//styles
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <PlayComp/>
      <div className='dummy'></div>
      <div className='rulesButton'>RULES</div>
    </div>
  );
}

export default App;
