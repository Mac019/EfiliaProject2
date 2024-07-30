import React from 'react';
import './Section.css';
import groupImage from '../asset/Group23.png';
import groupImage2 from '../asset/Group20.png';

const Section2 = () => {
  return (
    <div className="section2">
      <div className="box1">
      <img src={groupImage} alt="Group 23" className="top-left" />
          <h1>Vision and Mission</h1>
          <h1>Mission <span>Comfort</span></h1>
          <h1>main line <span>Energy</span></h1>
          <h1>main <span>Sustainability </span></h1>
        <img src={groupImage2} alt="Group 20"className="bottom-right" />
      </div>
      <div className="box2">
        <p><span>Design-</span>Ensure to blend aesthetics , requirements of happy 
        living and working with comfort and optimum use of space </p>
        <p><span>Develop-</span>Ensure seamless delivery with a plan on ground to suit the requirements with happy stakeholders, 'AT ALL TIMES</p>
        <p><span>Deliver-</span>Precision with focusing with attention to details , complaint to norms and regulations and adhere to timelines and achieving creation with efficiency</p>
        


      </div>
    </div>
  );
}

export default Section2;