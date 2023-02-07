import React, { useRef } from 'react';
//assets
import imageRules from '../assets/images/image-rules.svg';
import imageRulesBonus from '../assets/images/image-rules-bonus.svg';
import closeButton from '../assets/images/icon-close.svg';
//styles
import '../styles/videoModal.css';

const VideoComp = (props) => {
    const { closeVideoModal, videoModal } = props;
    const image = <img src={closeButton} alt='close button'/>;
    //states
    const modalOnOff = useRef('');
    const videoSrc = useRef('https://www.youtube.com/embed/iSHPVCBsnLw')

    if(videoModal){
        modalOnOff.current = 'videoModalOn';
        videoSrc.current = "https://www.youtube.com/embed/iSHPVCBsnLw";
    }else if(!videoModal && modalOnOff.current === 'videoModalOn'){
        modalOnOff.current = 'videoModalOff';
        videoSrc.current = "";
    }
    //functions
    const
    showVideo = ()=> <iframe width="100%" height="100%" src={videoSrc.current} title="YouTube video player" frameborder="1" allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

    return (
        <div className={`videoModal ${modalOnOff.current}`}>
            <div className='videoModalDiv' onClick={e=> e.stopPropagation()}>
                {/* {videoModal ? showVideo() : null} */}
                {showVideo()}
                <span onClick={()=> closeVideoModal()} className='buttons closeVideo'>
                    CLOSE
                </span>
            </div>
        </div>
    );
};

export default VideoComp;