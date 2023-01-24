import React from 'react';
//styles
import '../styles/playComp.css';
//assets
import bgTriangle from '../assets/images/bg-triangle.svg';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';

const PlayComp = () => {
    const handButton = type=> {
        let hand;
        if(type==='rock') hand = rock;
        if(type==='paper') hand = paper;
        if(type==='scissors') hand = scissors;
        return (
            <div className={`circle ${type}`}>
                <div className='imgDiv'>
                    <img src={hand}/>
                </div>
            </div>
        )
    }
    return (
        <div className='playComp bg-triangle'>
            {/* <img src={bgTriangle}/> */}
            {/* <h1>asfada</h1> */}
            {handButton('paper')}
            {handButton('scissors')}
            {handButton('rock')}
        </div>
    );
};

export default PlayComp;