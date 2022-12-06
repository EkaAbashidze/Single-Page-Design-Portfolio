import styled from "styled-components";
import React from "react";

function Grid() {
  return (
    <WholeGrid>
      <FirstCard>
        <Patterns width="128" height="192" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path fill="#552049" d="M0 0h64v128H0z" />
            <circle stroke="#FFF7F0" strokeWidth="4" cx="32" cy="32" r="14" />
            <g transform="translate(32 32)">
              <rect fill="#F6A560" x="32" width="64" height="32" rx="16" />
              <path fill="#61C4B7" d="m0 128 32 32v-32zM32 96l32 32V96z" />
              <circle
                stroke="#FFF7F0"
                strokeWidth="4"
                cx="80"
                cy="16"
                r="14"
              />
              <circle
                stroke="#FFF7F0"
                strokeWidth="4"
                cx="80"
                cy="16"
                r="14"
              />
            </g>
            <g fill="#030303">
              <path d="M64Patterns 14h4v4h-4zM68 14h4v4h-4zM92 14h4v4h-4z" />
            </g>
            <path fill="#755CDE" d="m96 0 32 32V0z" />
            <g fill="#030303">
              <path d="M96 14h4v4h-4zM120 14h4v4h-4zM124 14h4v4h-4z" />
            </g>
            <circle stroke="#030303" stroke-width="4" cx="80" cy="80" r="14" />
            <path fill="#EB7565" d="M96 64h32v32H96z" />
            <path fill="#FFF7F0" d="m32 96 96 96V96z" />
            <g fill="#030303">
              <path d="M0 128h4v4H0zM14 128h4v4h-4zM28 128h4v4h-4zM0 142h4v4H0zM14 142h4v4h-4zM28 142h4v4h-4z" />
              <g>
                <path d="M0 156h4v4H0zM14 156h4v4h-4zM28 156h4v4h-4z" />
              </g>
            </g>
          </g>
        </Patterns>
        <Paragraphs>Graphic Design</Paragraphs>
      </FirstCard>

      <LittleCards>
        <SecondCard>
          <Patterns width="64" height="64" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle
                stroke="#030303"
                stroke-width="4"
                cx="48"
                cy="16"
                r="14"
              />
              <path fill="#EB7565" d="M0 0h32v32H0z" />
              <g fill="#030303">
                <path d="M0 32h4v4H0zM14 32h4v4h-4zM28 32h4v4h-4zM0 46h4v4H0zM14 46h4v4h-4zM28 46h4v4h-4z" />
                <g>
                  <path d="M0 60h4v4H0zM14 60h4v4h-4zM28 60h4v4h-4z" />
                </g>
              </g>
              <path fill="#FFF7F0" d="m32 32 32 32V32z" />
            </g>
          </Patterns>
          <Paragraphs>UI/UX</Paragraphs>
        </SecondCard>
        <ThirdCard>
          <Patterns width="64" height="64" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(0 32)">
                <rect fill="#552049" width="64" height="32" rx="16" />
                <circle
                  stroke="#FFF7F0"
                  stroke-width="4"
                  cx="48"
                  cy="16"
                  r="14"
                />
              </g>
              <g fill="#030303">
                <path d="M0 14h4v4H0zM4 14h4v4H4zM28 14h4v4h-4z" />
              </g>
              <path fill="#755CDE" d="m32 0 32 32V0z" />
              <g fill="#030303">
                <path d="M32 14h4v4h-4zM56 14h4v4h-4zM60 14h4v4h-4z" />
              </g>
            </g>
          </Patterns>
          <Paragraphs>Apps</Paragraphs>
        </ThirdCard>
      </LittleCards>

      <FourthCard>
        <Patterns width="128" height="64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(64)">
              <circle
                stroke="#FFF7F0"
                stroke-width="4"
                cx="48"
                cy="16"
                r="14"
              />
              <path fill="#755CDE" d="M0 0h32v32H0z" />
              <g fill="#030303">
                <path d="M32 32h4v4h-4zM46 32h4v4h-4zM60 32h4v4h-4zM32 46h4v4h-4zM46 46h4v4h-4zM60 46h4v4h-4z" />
                <g>
                  <path d="M32 60h4v4h-4zM46 60h4v4h-4zM60 60h4v4h-4z" />
                </g>
              </g>
              <path fill="#F39E9E" d="m0 32 32 32V32z" />
            </g>
            <g fill="#030303">
              <path d="M32 32h4v4h-4zM46 32h4v4h-4zM60 32h4v4h-4zM32 56h4v4h-4zM46 56h4v4h-4zM60 56h4v4h-4z" />
              <g>
                <path d="M32 60h4v4h-4zM46 60h4v4h-4zM60 60h4v4h-4z" />
              </g>
            </g>
            <g fill="#030303">
              <path d="M32 0h4v4h-4zM46 0h4v4h-4zM60 0h4v4h-4zM32 4h4v4h-4zM46 4h4v4h-4zM60 4h4v4h-4z" />
              <g>
                <path d="M32 28h4v4h-4zM46 28h4v4h-4zM60 28h4v4h-4z" />
              </g>
            </g>
            <path fill="#61C4B7" d="m0 32 32 32V32z" />
            <path fill="#FFF7F0" d="M32 0 0 32V0z" />
          </g>
        </Patterns>
        <Paragraphs>Illustrations</Paragraphs>
      </FourthCard>
      <FifthCard>
        <Patterns width="160" height="64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <path fill="#EB7565" d="M32 0h64v64H32z" />
            <circle stroke="#030303" stroke-width="4" cx="16" cy="16" r="14" />
            <circle stroke="#FFF7F0" stroke-width="4" cx="64" cy="32" r="14" />
            <g fill="#030303">
              <path d="M128 32h4v4h-4zM142 32h4v4h-4zM156 32h4v4h-4zM128 56h4v4h-4zM142 56h4v4h-4zM156 56h4v4h-4z" />
              <g>
                <path d="M128 60h4v4h-4zM142 60h4v4h-4zM156 60h4v4h-4z" />
              </g>
            </g>
            <g fill="#030303">
              <path d="M128 0h4v4h-4zM142 0h4v4h-4zM156 0h4v4h-4zM128 4h4v4h-4zM142 4h4v4h-4zM156 4h4v4h-4z" />
              <g>
                <path d="M128 28h4v4h-4zM142 28h4v4h-4zM156 28h4v4h-4z" />
              </g>
            </g>
            <path fill="#FFF7F0" d="m96 32 32 32V32z" />
            <path fill="#552049" d="m96 32 32 32V32z" />
            <path fill="#F39E9E" d="M32 64 0 32v32z" />
            <path fill="#FFF7F0" d="m96 32 32-32v32z" />
          </g>
        </Patterns>
        <Paragraphs>Photography</Paragraphs>
      </FifthCard>
      <SixthCard>
        <Patterns width="128" height="64" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <circle stroke="#F39E9E" stroke-width="4" cx="80" cy="16" r="14" />
            <circle
              stroke-opacity=".5"
              stroke="#F39E9E"
              stroke-width="4"
              cx="48"
              cy="16"
              r="14"
            />
            <circle
              stroke-opacity=".25"
              stroke="#F39E9E"
              stroke-width="4"
              cx="16"
              cy="16"
              r="14"
            />
            <circle stroke="#FFF7F0" stroke-width="4" cx="112" cy="16" r="14" />
            <path fill="#F39E9E" d="M128 64 96 32v32z" />
            <rect fill="#F6A560" x="32" y="32" width="64" height="32" rx="16" />
            <path
              d="M0 50v-4h8v4H0Zm28 0v-4h8v4h-8Zm28 0v-4h8v4h-8Z"
              fill="#FFF7F0"
            />
          </g>
        </Patterns>
        <Paragraphs>Mothion Graphics</Paragraphs>
      </SixthCard>
    </WholeGrid>
  );
}

const WholeGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  margin-bottom: 100px;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    margin-bottom: 120px;
    margin-left: 39px;
    margin-right: 39px;
    width: 690px;
    height: 570px;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-left: 165px;
    margin-right: 165px;
    margin-bottom: 136px;
    width: 756px;
    height: 364px;
  }
`;


const FirstCard = styled.div`
  width: 343px;
  height: 364px;
  background-color: #755cde;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  @media screen and (min-width: 767.5px) {
    grid-area: 1 / 1 / 3 / 2;
    width: 333px;
  }
  @media screen and (min-width: 1439.5px) {
    width: 354px;
  }
`;

const LittleCards = styled.div`
  display: flex;
  column-gap: 23px;
  @media screen and (min-width: 767.5px) {
    grid-area: 1 / 2 / 2 / 3;
  }

`;

const Paragraphs = styled.p`
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const SecondCard = styled.div`
  width: 159px;
  height: 182px;
  background: #f6a560;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  @media screen and (min-width: 767.5px) {
    width: 155px;
  }
  @media screen and (min-width: 1439.5px) {
    width: 164px;
  }
`;

const ThirdCard = styled.div`
  width: 159px;
  height: 182px;
  background-color: #f39e9e;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  @media screen and (min-width: 767.5px) {
    width: 155px;
  }
  @media screen and (min-width: 1439.5px) {
    width: 164px;
  }
`;

const FourthCard = styled.div`
  width: 343px;
  height: 158px;
  background-color: #eb7565;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  @media screen and (min-width: 767.5px) {
    grid-area: 2 / 2 / 3 / 3;
    width: 333px;
  }
  @media screen and (min-width: 1439.5px) {
    width: 354px;
  }
`;

const FifthCard = styled.div`
  width: 343px;
  height: 182px;
  background-color: #61c4b7;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  @media screen and (min-width: 767.5px) {
    grid-area: 3 / 1 / 4 / 2;
    width: 333px;
  }
  @media screen and (min-width: 1439.5px) {
    grid-area: 1 / 3 / 2 / 4;
  }
  @media screen and (min-width: 1439.5px) {
    width: 354px;
  }
`;

const SixthCard = styled.div`
  width: 343px;
  height: 182px;
  background-color: #552049;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  @media screen and (min-width: 767.5px) {
    grid-area: 3 / 2 / 4 / 3;
    width: 333px;
  }
  @media screen and (min-width: 1439.5px) {
    grid-area: 2 / 3 / 3 / 4;
  }
  @media screen and (min-width: 1439.5px) {
    width: 354px;
    height: 158px;
  }
`;



const Patterns = styled.svg`
  align-self: flex-end;
`;

export default Grid;