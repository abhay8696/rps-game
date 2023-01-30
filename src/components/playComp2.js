import React from 'react';
//styles
import '../styles/playComp.css';
import '../styles/playComp2.css';
//assets
import bgTriangle from '../assets/images/bg-triangle.svg';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';

const PlayComp2 = (props) => {
    const { pick1, pick2, winnerMsg, handleReset } = props;
    
    const 
    handButton = (type, pickedBy)=> {
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
            <div className={`circle circle2 ${type} ${pickedBy}`}>
                <div className='imgDiv'>
                    <img src={hand} alt={hand}/>
                </div>
            </div>
            </>
        )
    };
    return (
        <div className='playComp2'>
            <div className='innerDiv1'>
                <div className='msg'>YOU PICKED</div>
                <div className='msg'>THE HOUSE PICKED</div>
            </div>
            <div className='innerDiv'>
                {handButton(pick1, 'pick1')}
                <div className='result result1'>
                    <span className='resultMsg msg'>{winnerMsg}</span>
                    <span className='playAgain' onClick={()=> handleReset()}>PLAY AGAIN</span>
                </div>
                {handButton(pick2, 'pick2')}
            </div>
            <div className='result result2'>
                <span className='resultMsg msg'>{winnerMsg}</span>
                <span className='playAgain' onClick={()=> handleReset()}>PLAY AGAIN</span>
            </div>
            <div className='innerDiv2'>
                <div className='msg'>YOU PICKED</div>
                <div className='msg'>THE HOUSE PICKED</div>
            </div>
        </div>
    );
};

export default PlayComp2;