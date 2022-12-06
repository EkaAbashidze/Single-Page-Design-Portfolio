import styled from "styled-components";
import React from "react";

function Header() {
    return (
    <HeaderDiv>
        <Design>Design solutions made easy</Design>
        <Para>
            With over ten years of experience in various design disciplines, I’m
            your one-stop shop for your design needs.
        </Para>
        </HeaderDiv>
    )
}

export default Header;

const Design = styled.h1`
    font-weight: 700;
    font-size: 44px;
    line-height: 55px;
    padding-bottom: 27px;
    @media screen and (max-width: 767.5px) {
        font-size: 36px;
        line-height: 45px;
    }
    @media screen and (min-width: 1439.5px) {
        font-size: 56px;
        line-height: 71px;
        padding-bottom: 23px;
    }
    `;


const Para = styled.h1`
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #7a746e;
    @media screen and (max-width: 767.5px) {
        font-size: 16px;
        line-height: 26px;
        margin-left: 45px;
        margin-right: 45px;
    }
    @media screen and (min-width: 767.5px) {
        max-width: 730px;
    }

`;

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 36px 39px 64px 39px;
    @media screen and (max-width: 767.5px) {
        margin: 0px 16px 32px 16px;
    }
    @media screen and (min-width: 1439.5px) {
        margin-bottom: 80px;
    }
`;