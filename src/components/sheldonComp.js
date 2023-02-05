import React, { useRef } from 'react';
//styles
// import '../styles/playComp.css';
import '../styles/sheldonComp.css';
//assets
import bgTriangle from '../assets/images/bg-triangle.svg';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';
import lizard from '../assets/images/icon-lizard.svg';
import spock from '../assets/images/icon-spock.svg';

const SheldonComp = (props) => {
    const { handlePick, sheldon, clickedPlayAgain } = props;
    const class_name = useRef('sheldonComp') ;
    const handButton = type=> {
        let hand;
        if(type==='rock') hand = rock;
        if(type==='paper') hand = paper;
        if(type==='scissors') hand = scissors;
        if(type==='lizard') hand = lizard;
        if(type==='spock') hand = spock;
        return (
            <div className={`circle circle3 ${type}`} onClick={()=> handlePick(type)}>
                <div className='imgDiv'>
                    <img src={hand} alt={`${type}Image`}/>
                </div>
            </div>
        )
    }
    if(!sheldon){
        if(clickedPlayAgain) class_name.current = 'hideSheldonComp'; //to avoid trigger of disappering animaiton
        else class_name.current = 'disappearSheldonComp'
    }else class_name.current = 'sheldonComp';
    return (
        <div className={`${class_name.current} bg-pentagon`}>
            {handButton('scissors')}
            {handButton('spock')}
            {handButton('paper')}
            {handButton('lizard')}
            {handButton('rock')}
        </div>
    );
};

export default SheldonComp;