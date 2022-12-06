    import styled from "styled-components";
    import React from "react";
    import ImageOne from "../assets/image-slide-1.jpg";
    import ImageTwo from "../assets/image-slide-2.jpg";
    import ImageThree from "../assets/image-slide-3.jpg";
    import ImageFour from "../assets/image-slide-4.jpg";
    import ImageFive from "../assets/image-slide-5.jpg";
    import ImageSlider from "./ImageSlider";
    import { useState } from "react";

    function Slider() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const slides = [
        { slide: ImageOne },
        { slide: ImageTwo },
        { slide: ImageThree },
        { slide: ImageFour },
        { slide: ImageFive },
    ];

    //     const containerStyles = {
    //     width: "840px",
    //     height: "180px",
    //     margin: "0 auto",
    //     transform: "translateX(-27.5%)"
    // }

    // // @media screen and (min-width: 767.5px) {
    // //     width: 1680px,
    // //     height: 360px,
    // //     margin: 0 auto,
    // // }
    
    // // `;


    return (
        <WholeSlider>
        <Header>My Work</Header>

        <ContainerStyles>
            <ImageSlider slides={slides} currentIndex={currentIndex} />
        </ContainerStyles>

        <Arrows>
            <ArrowLeft
            onClick={() => {
                const number = currentIndex === 0 ? slides.length - 1 : currentIndex - 1
                setCurrentIndex(number);
            }}
            >
            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                fill="#FFF"
                d="M8 0 0 8l8 8 1.687-1.687-5.121-5.12h10.241V6.807H4.566l5.121-5.12z"
                />
            </svg>
            </ArrowLeft>

            <ArrowRight onClick={() => setCurrentIndex(currentIndex + 1)}>
            <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                fill="#FFF"
                d="m6.808 16 8-8-8-8-1.687 1.687 5.121 5.12H.001v2.386h10.241l-5.121 5.12z"
                />
            </svg>
            </ArrowRight>
        </Arrows>
        </WholeSlider>
    );
    }

    export default Slider;

    const Header = styled.h2`
    color: #030303;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    margin: auto;
    margin-bottom: 32px;
    @media screen and (min-width: 767.5px) {
        font-size: 32px;
        line-height: 40px;
    }
    `;

    const WholeSlider = styled.div`
        display: flex;
        flex-direction: column;
        align-content: center;
        margin-bottom: 100px;
        @media screen and (min-width: 1439.5px) {
            margin-bottom: 88px;
        }
    `;

    const Arrows = styled.div`
        display: flex;
        justify-content: center;
        gap: 16px;
        margin-top: 32px;
        @media screen and (min-width: 1439.5px) {
            margin-top: 56px;
        }
    `;

    const ArrowLeft = styled.div`
    background-color: #030303;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    `;

    const ArrowRight = styled.div`
    background-color: #030303;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    `;

    const ContainerStyles = styled.div`
        width: 840px;
        height: 180px;
        margin: 0 auto;
        transform: translateX(-27.5%);
        @media screen and (min-width: 767.5px) {
            width: 1680px;
            height: 360px;
            transform: translateX(0%);
        }
        @media screen and (min-width: 1439.5px) {
            transform: translateX(-7%);
        }
    `;