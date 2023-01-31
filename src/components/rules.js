import React, { useRef } from 'react';
//assets
import imageRules from '../assets/images/image-rules.svg';
import closeButton from '../assets/images/icon-close.svg';
//styles
import '../styles/rulesModal.css';

const Rules = (props) => {
    const { closeModal, rulesModal } = props;
    const image = <img src={closeButton} alt='close button'/>;
    //states
    const modalOnOff = useRef('');

    if(rulesModal){
        modalOnOff.current = 'modalOn';
    }else if(!rulesModal && modalOnOff.current === 'modalOn'){
        modalOnOff.current = 'modalOff';
    }

    return (
        <div onClick={()=> closeModal()} className={`rulesModal ${modalOnOff.current}`}>
            <div className='modalDiv' onClick={e=> e.stopPropagation()}>
                <div className='modalHeader'>
                    <span>RULES</span>
                    <span onClick={()=> closeModal()}>
                        {image}
                    </span>
                </div>
                <img src={imageRules} alt='rules image'/>
            </div>
        </div>
    );
};

export default Rules;