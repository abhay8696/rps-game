import React, { useRef } from 'react';
//styles
import '../styles/playComp.css';
import '../styles/playComp2.css';
//assets
import bgTriangle from '../assets/images/bg-triangle.svg';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';

const PlayComp2 = (props) => {
    const { pick1, pick2, winnerMsg, handleReset, sheldon } = props;
    const class_name = useRef('playComp2');
    if(sheldon) {
        class_name.current = 'disappearPlayComp2';
    } else class_name.current = 'playComp2';
    const
    handButton = (type, pickedBy)=> {
        let hand, winnerShadow='';
        if(type==='rock') hand = rock;
        if(type==='paper') hand = paper;
        if(type==='scissors') hand = scissors;
        if(winnerMsg === 'YOU WIN!' && pickedBy==='pick1'){
            winnerShadow = 'winnerShadow';
        }else if(winnerMsg === 'YOU LOSE :(' && pickedBy==='pick2'){
            winnerShadow = 'winnerShadow';
        }

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
            <div className={`circle circle2 ${type} ${pickedBy} ${winnerShadow}`}>
                <div className='imgDiv'>
                    <img src={hand} alt={`${type}Image`}/>
                </div>
            </div>
            </>
        )
    };
    return (
        <div className={`${class_name.current}`}>
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