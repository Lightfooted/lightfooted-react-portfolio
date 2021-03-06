import React from 'react';
import GitHubIcon from '../../assets/icons/gitlighticon.png';
import TwitIcon from '../../assets/icons/twittericon.png';
import LinkIcon from '../../assets/icons/linkicon.png';

function Footer() {

    return (
        <footer className='fixed inset-x-0 bottom-0 flex items-center w-auto p-4 bg-black justify-evenly'>
        <a href="https://github.com/Lightfooted" rel='noopener noreferrer' target='_blank'><img src={GitHubIcon} alt="gitprofileicon"/></a>
        <a href="https://twitter.com/Kim_Lightfooted" rel='noopener noreferrer' target='_blank'><img src={TwitIcon} alt="twitterprofileicon"/></a>
        <a href="https://www.linkedin.com/in/kimberly-collazo-a12018225/" rel='noopener noreferrer' target='_blank'><img src={LinkIcon} alt="linkprofileicon"/></a>
        </footer>
    )
  }
  
  export default Footer;