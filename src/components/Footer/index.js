import React from 'react';
import Icons from '../../assets/icons/gitlighticon.png';

function Footer() {

    return (
        <div className="fixed-footer">
        <footer id="footer" className="footer-container">
        <a href="https://github.com/Lightfooted"><img src={Icons} alt="gitprofileicon"/></a>
        </footer>
      </div>
    )
  }
  
  export default Footer;

//TO DO: Add more links to footer