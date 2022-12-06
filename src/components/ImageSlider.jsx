import React, { useState } from "react";

function ImageSlider({ slides, currentIndex }) {


    const sliderStyles = {
        height: "100%",
        width: "100%",
        position: "relative",
        display: "flex",
        columnGap: "15px"
    };

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    const slideStylesOne = {
        ...slideStyles,
        backgroundImage: `url(${slides[currentIndex % 5].slide})`,
    };


    const slideStylesTwo = {
        ...slideStyles,
        backgroundImage: `url(${slides[(currentIndex + 1) % 5 ].slide})`,
        };

        const slideStylesThree = {
        ...slideStyles,
        backgroundImage: `url(${slides[(currentIndex + 2) % 5 ].slide})`,
        };

    return (
        <div style={sliderStyles}>
            <div style={slideStylesOne}></div>
            <div style={slideStylesTwo}></div>
            <div style={slideStylesThree}></div>
        </div>
    );
}

export default ImageSlider;
