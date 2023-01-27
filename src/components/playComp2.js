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
    const { pick1, pick2, handleReset } = props;
    console.log({pick1, pick2})
    const handButton = type=> {
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
    }
    return (
        <div className='playComp2' onClick={()=> handleReset()}>
            <div className='innerDiv1'>
                <div className='msg'>YOU PICKED</div>
                <div className='msg'>THE HOUSE PICKED</div>
            </div>
            <div className='innerDiv'>
                {handButton(pick1)}
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