import React from "react";
// Styles
import { About } from "../styles";
import styled from "styled-components";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>Can I learn programming from 0 on your platform?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            asperiores.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>How long will the study last?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            asperiores.
          </p>
        </div>
      </div>
      <div className="question">
        <h4>How much do I have to pay per month?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            asperiores.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>If I buy the course, can my brother and I also study?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            asperiores.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }

  .faq-line {
    background: #ccc;
    height: 0.2rem;
    width: 100%;
    margin: 2rem 0rem;
  }
`;

export default FaqSection;
