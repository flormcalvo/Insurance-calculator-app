import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const Message = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultContainer = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const TextContainer = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ quote }) => {
  return quote ? (
    <ResultContainer>
      <TransitionGroup component="span" className="result">
        <CSSTransition
          classNames="result"
          key={quote}
          timeout={{ enter: 500, exit: 500 }}
        >
          <TextContainer>
            The total is: $<span>{quote}</span>{" "}
          </TextContainer>
        </CSSTransition>
      </TransitionGroup>
    </ResultContainer>
  ) : (
    <Message>Choose brand, year and insurance plan</Message>
  );
};

Result.propTypes = {
  quote: PropTypes.number.isRequired
};

export default Result;
