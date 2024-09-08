import React from "react";
import { About, Description, Image } from "../styles";
import homeIntro2 from "../img/home_intro2.jpg";
import styled from "styled-components";

const BenefitSection = () => {
  return (
    <Benefits>
      <Description>
        <h2>High-Quality Learning System</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced mentors</h3>
          <h3>Fast learning system</h3>
          <h3>Offline school for children</h3>
        </div>
      </Description>
      <Image>
        <img src={homeIntro2} alt="happy children" />
      </Image>
    </Benefits>
  );
};

// Styled
const Benefits = styled(About)`
  flex-direction: row-reverse;
  h2 {
    margin: 0 0 0 5rem;
    color: #30bee1;
    padding-bottom: 5rem;
  }
  h3 {
    font-size: 1.4rem;
    padding: 1rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem 0 0 5rem;
    width: 70%;
    clip-path: polygon(0 10%, 100% 0, 100% 91%, 0% 100%);
    border-left: 4px solid #30bee1;
    
  }
`;

export default BenefitSection;
