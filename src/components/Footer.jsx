import React from 'react'
import "./Footer.css";
import groupLogo from '../asset/Group36.png';
import groupLinkdin from '../asset/Linkdin.png';
import groupFacebook from '../asset/Facebook.png';
import groupInstagram from '../asset/Instagram.png';


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
        <img src={groupLogo} alt="Group 20" />
        </div>
        <div className="footer-links">
        <a href="https://example.com/link1">Area of Expertise</a>
        <a href="https://example.com/link2">Feasibility analysis</a>
        <a href="https://example.com/link3">About us </a>
        </div>
        <div className="footer-icons">
        <img src={groupLinkdin} alt="Group 20" />
        <img src={groupFacebook} alt="Group 20" />
        <img src={groupInstagram} alt="Group 20" />
        </div>
    </div>
  )
}

export default Footer