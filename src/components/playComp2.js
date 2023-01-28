import React, { useState } from 'react';
//styles
import '../styles/playComp.css';
import '../styles/playComp2.css';
//assets
import bgTriangle from '../assets/images/bg-triangle.svg';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';

const PlayComp2 = (props) => {
    const { pick1, pick2, handleReset } = props;
    //states
    const [resultMsg, setResultMsg] = useState();
    
    const 
    handButton = type=> {
        let hand;
        if(type==='rock') hand = rock;
        if(type==='paper') hand = paper;
        if(type==='scissors') hand = scissors;

        if(!type){
            return (
                <>
                <div className={`circle ${type}`}>
                    <div className='emptyImg'>
                        
                    </div>
                </div>
                </>
            )
        }
        return (
            <>
            <div className={`circle ${type}`}>
                <div className='imgDiv'>
                    <img src={hand}/>
                </div>
            </div>
            </>
        )
    },
    getResult = ()=> {
        let a;
        if(pick1 === pick2) return a = 'DRAW';
        // rock > scissors > paper > rock
        if(pick1 === 'rock'){
            pick2 === 'paper' ? a = 'YOU LOSE' : a = 'YOU WIN';
        }else if(pick1 === 'paper'){
            pick2 === 'scissors' ? a = 'YOU LOSE' : a = 'YOU WIN';
        }else if(pick1 === 'scissors'){
            pick2 === 'rock' ? a = 'YOU LOSE' : a = 'YOU WIN';
        }

        return a;
    };
    return (
        <div className='playComp2'>
            <div className='innerDiv1'>
                <div className='msg'>YOU PICKED</div>
                <div className='msg'>THE HOUSE PICKED</div>
            </div>
            <div className='innerDiv'>
                {handButton(pick1)}
                <div className='result'>
                    <span className='resultMsg msg'>{getResult()}</span>
                    <span className='playAgain' onClick={()=> handleReset()}>PLAY AGAIN</span>
                </div>
                {handButton(pick2)}
            </div>
            <div className='innerDiv2'>
                <div className='msg'>YOU PICKED</div>
                <div className='msg'>THE HOUSE PICKED</div>
            </div>
        </div>
    );
};

export default PlayComp2;