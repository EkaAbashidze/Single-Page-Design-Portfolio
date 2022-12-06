import styled from "styled-components";
import Button from "./Button";
import React from "react";

function Card() {
  return (
    <Cardbox>
      <Heading>Book a call with me</Heading>
      <Para>
        I’d love to have a chat to see how I can help you. The best first step
        is for us to discuss your project during a free consultation. Then we
        can move forward from there.
      </Para>

      {/* <div> */}
      <Button />
      {/* </div> */}
    </Cardbox>
  );
}

export default Card;

const Cardbox = styled.div`
  width: 90%;
  height: 352px;
  background-color: #030303;
  color: #fff7f0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 49px 24px 48px 24px;
  gap: 24px;
  margin: auto;
  margin-bottom: 0;
  @media screen and (min-width: 767.5px) {
    margin-bottom: 40px;
    width: 95%;
  }
  @media screen and (min-width: 1439.5px) {
    max-width: 1110px;
  }
`;

const Heading = styled.h1`
  font-size: 26px;
  font-weight: 700;
  line-height: 33px;
  @media screen and (min-width: 767.5px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media screen and (min-width: 1439.5px) {
    font-size: 40px;
    line-height: 50px;
  }
`;

const Para = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  @media screen and (min-width: 767.5px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
