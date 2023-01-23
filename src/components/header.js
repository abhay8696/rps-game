import React from 'react';
//styles
import '../styles/header.css';
import logo from '../assets/images/logo.svg';
import logoBonus from '../assets/images/logo-bonus.svg';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} className='logo'/>
            <div className='scoreCard'>
                <span className='scoreText'>SCORE</span>
                <span className='score'>12</span>
            </div>
        </div>
    );
};

export default Header;