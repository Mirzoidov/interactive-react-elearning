import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
//images
import react from "../img/react.png";
import javascript from "../img/javascript.png";
import soon from "../img/fullstack.png";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Courses = () => {
  return (
    <StyledCourses variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Course>
        <h2>Interaktiv React va Redux</h2>
        <div className="line"></div>
        <Link to="/courses/react">
          <img src={react} alt="react-redux" />
        </Link>
      </Course>
      <Course>
        <h2>Tez kunda 😯</h2>
        <div className="line"></div>
        <Link to="/courses/soon">
          <img src={soon} alt="tez-kunda" />
        </Link>
      </Course>
      <Course>
        <h2>Interaktiv JavaScript </h2>
        <div className="line"></div>
        <Link to="/courses/javascript">
          <img src={javascript} alt="JavaScript" />
        </Link>
      </Course>
    </StyledCourses>
  );
};

const StyledCourses = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  
  h2 {
    padding: 1rem 0;
  }
`;

const Course = styled.div`
  padding-bottom: 10rem;
  .line{
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s;
  }
`;

export default Courses;
