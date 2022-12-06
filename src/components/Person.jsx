import styled from "styled-components";
import Personpng from "../assets/person.png";
import Button from "./Button";
import React from "react";

function Person() {
    return (
        <PersonComp>
            <PersonPhoto src={Personpng} alt="" />

            <Text>
            <Header>I’m Amy, and I’d love to work on your next project</Header>
            <Para>
                I love working with others to create beautiful design solutions.
                I’ve designed everything from brand illustrations to complete mobile
                apps. I’m also handy with a camera!
            </Para>
            <Button />
            </Text>
        </PersonComp>
    );
}

export default Person;

const Text = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    row-gap: 24px;
    @media screen and (min-width: 767.5px) {
        text-align: start;
        align-items: flex-start;
        margin-left: 69px;
        margin-right: 40px;
    }
    @media screen and (min-width: 1439.5px) {
        row-gap: 33px;
        margin-left: 125px;
        margin-right: 165px;
    }
`;

const PersonComp = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    gap: 24px;
    padding-left: 16px;
    padding-right: 16px;
    margin-bottom: 100px;
    @media screen and (min-width: 767.5px) {
        flex-direction: row;
    }
    @media screen and (min-width: 1439.5px) {
        margin-bottom: 88px;
    }

`;

const PersonPhoto = styled.img`
    margin-left: -7%;
    @media screen and (min-width: 767.5px) {
        width: 364px;
        height: 364px;
    }
    @media screen and (min-width: 1439.5px) {
        width: 445px;
        height: 445px;
        margin-left: 154px;
    }
`;

const Para = styled.p`
    color: #7a746e;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    @media screen and (min-width: 767.5px) {
        font-size: 18px;
        line-height: 28px;
    }

`;

const Header = styled.h2`
    margin-top: 16px;
    font-weight: 700;
    font-size: 26px;
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