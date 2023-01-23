import React from 'react';
//styles
import '../styles/header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='title'>
                <span>ROCK</span>
                <span>PAPER</span>
                <span>SCISSOR</span>
            </div>
            <div className='scoreCard'>
                <span className='scoreTitle'>SCORE</span>
                <span className='score'>12</span>
            </div>
        </div>
    );
};

export default Header;