import React, { useEffect, useState } from 'react';
//styles
import '../styles/App.css';
//assets
import sheldon1Img from '../assets/images/sheldon.png';
import sheldon2Img from '../assets/images/sheldon2.png';
import sheldon3Img from '../assets/images/sheldon3.png';
import sheldon4Img from '../assets/images/sheldon4.png';
import sheldon5Img from '../assets/images/sheldon5.png';

const RandomImg = () => {
    // states
    const [sheldonImg, setSheldonImg] = useState(<img src={sheldon2Img} className='sheldonImg'/>);
    //lifecycle methods
    useEffect(()=> {
        // console.log('image')
        // const a = 
        // setInterval(() => {
        //   pickSheldonImg();
        // }, 5000);
    
        // return clearInterval(a);
    }, [])
    // functions
    const 
    showSholdonImg = ()=> sheldonImg,
    pickSheldonImg = ()=> {
      let image = ['', sheldon1Img, sheldon2Img, sheldon3Img, sheldon4Img, sheldon5Img][[Math.floor(Math.random()*5)+1]]
      setSheldonImg(<img src={image} className='sheldonImg'/>);
      console.log(image)
    }

    return (
        <div className='imgCaraousel'>
        <img src={sheldon1Img} className='sheldonImg' id='img1'/>
        <img src={sheldon2Img} className='sheldonImg' id='img2'/>
        <img src={sheldon3Img} className='sheldonImg' id='img3'/>
        <img src={sheldon4Img} className='sheldonImg' id='img4'/>
        <img src={sheldon5Img} className='sheldonImg' id='img5'/>
        </div>
    );
};

export default RandomImg;