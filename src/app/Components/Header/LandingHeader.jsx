import './LandingHeader.css';
import React from 'react';
import { LogoImage } from '../Logo/index';
import Profileimage from '../../assets/images/profile.png';


export const LandingHeader = () => {
  return (
    <header className='header'>
     <div className='logo'>
       <a href='/home'>      
         <LogoImage useWhite = {true} />
       <h3>Home</h3></a>
     </div>
     <div>
     <img src={Profileimage} alt="profile" />
    </div>
  </header>)
}


