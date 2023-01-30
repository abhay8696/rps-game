import React from 'react';
//assets
import imageRules from '../assets/images/image-rules.svg';
import closeButton from '../assets/images/icon-close.svg';
//styles
import '../styles/rulesModal.css';

const Rules = (props) => {
    const { closeModal } = props;
    const image = <img src={closeButton} alt={closeButton}/>;
    return (
        <div onClick={()=> closeModal()} className='rulesModal'>
            <div className='modalDiv' onClick={e=> e.stopPropagation()}>
                <div className='modalHeader'>
                    <span>RULES</span>
                    <span onClick={()=> closeModal()}>
                        {image}
                    </span>
                </div>
                <img src={imageRules} alt={imageRules}/>
            </div>
        </div>
    );
};

export default Rules;