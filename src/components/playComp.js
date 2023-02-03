import React, { useRef } from 'react';
//styles
import '../styles/playComp.css';
//assets
import bgTriangle from '../assets/images/bg-triangle.svg';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';

const PlayComp = (props) => {
    const { handlePick, sheldon } = props;
    const class_name = useRef('playComp') ;
    const handButton = type=> {
        let hand;
        if(type==='rock') hand = rock;
        if(type==='paper') hand = paper;
        if(type==='scissors') hand = scissors;
        return (
            <div className={`circle ${type}`} onClick={()=> handlePick(type)}>
                <div className='imgDiv'>
                    <img src={hand} alt={`${type}Image`}/>
                </div>
            </div>
        )
    }
    if(sheldon){
        class_name.current = 'disappearPlayComp'
    }else class_name.current = 'playComp';
    return (
        <div className={`${class_name.current} bg-triangle`}>
            {/* <img src={bgTriangle}/> */}
            {/* <h1>asfada</h1> */}
            {handButton('paper')}
            {handButton('scissors')}
            {handButton('rock')}
        </div>
    );
};

export default PlayComp;