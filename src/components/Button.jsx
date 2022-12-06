import styled from "styled-components";
import React from "react";

function Button() {
    return <ButtonEl>Free Consultation</ButtonEl>;
    }

    export default Button;

    const ButtonEl = styled.button`
      background-color: #eb7565;
      border: 28px;
      width: 176px;
      height: 44px;
      color: #fff7f0;
      font-family: "Plus Jakarta Sans", sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 28px;
      font-size: 14px;
      line-height: 28px;
      cursor: pointer;
      @media screen and (min-width: 767.5px) {
        font-size: 16px;
        width: 228px;
        height: 56px;
      }
      :hover {
        background-color: #f6a560;
      }
    `;
