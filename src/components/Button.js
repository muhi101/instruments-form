import React from "react";
import { Button as ReactButton } from "reactstrap";
import styled from "styled-components";

const ButtonWrapper = styled.div(
  (props) => `
    ${
      !props.showBtn &&
      `
      pointer-events: none;
      opacity: 0.5;
    `
    }
  `
);

const Button = ({ showBtn }) => {
  return (
    <>
      <ButtonWrapper showBtn={showBtn}>
        <ReactButton color="primary">Submit</ReactButton>
      </ButtonWrapper>
    </>
  );
};

export default Button;
