import React, { useRef } from 'react';
//assets
import imageRules from '../assets/images/image-rules.svg';
import imageRulesBonus from '../assets/images/image-rules-bonus.svg';
import closeButton from '../assets/images/icon-close.svg';
//styles
import '../styles/rulesModal.css';

const VideoComp = (props) => {
    const { closeVideoModal, videoModal } = props;
    const image = <img src={closeButton} alt='close button'/>;
    //states
    const modalOnOff = useRef('');

    if(videoModal){
        modalOnOff.current = 'modalOn';
    }else if(!videoModal && modalOnOff.current === 'modalOn'){
        modalOnOff.current = 'modalOff';
    }

    return (
        <div onClick={()=> closeVideoModal()} className={`rulesModal ${modalOnOff.current}`}>
            <div className='modalDiv' onClick={e=> e.stopPropagation()}>
                <div className='modalHeader'>
                    <span></span>
                    <span onClick={()=> closeVideoModal()}>
                        {image}
                    </span>
                </div>
                
                <iframe width="auto" height="auto" src="https://www.youtube.com/embed/iSHPVCBsnLw" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                
            </div>
        </div>
    );
};

export default VideoComp;