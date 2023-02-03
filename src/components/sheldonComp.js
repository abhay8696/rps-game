import React, { useRef } from 'react';
//styles
// import '../styles/playComp.css';
import '../styles/sheldonComp.css';
//assets
import bgTriangle from '../assets/images/bg-triangle.svg';
import rock from '../assets/images/icon-rock.svg';
import paper from '../assets/images/icon-paper.svg';
import scissors from '../assets/images/icon-scissors.svg';

const SheldonComp = (props) => {
    const { handlePick, sheldon } = props;
    const class_name = useRef('sheldonComp') ;
    const handButton = type=> {
        let hand;
        if(type==='rock') hand = rock;
        if(type==='paper') hand = paper;
        if(type==='scissors') hand = scissors;
        if(type==='lizard') hand = scissors;
        if(type==='spock') hand = scissors;
        return (
            <div className={`circle ${type}`} onClick={()=> handlePick(type)}>
                <div className='imgDiv'>
                    <img src={hand} alt={`${type}Image`}/>
                </div>
            </div>
        )
    }
    if(!sheldon){
        class_name.current = 'disappearSheldonComp'
    }else class_name.current = 'sheldonComp';
    return (
        <div className={`${class_name.current} bg-pentagon`}>
            {/* <img src={bgTriangle}/> */}
            {/* <h1>asfada</h1> */}
            {/* {handButton('paper')}
            {handButton('scissors')}
            {handButton('rock')} */}
            {/* {handButton('lizard')}
            {handButton('spock')} */}
        </div>
    );
};

export default SheldonComp;