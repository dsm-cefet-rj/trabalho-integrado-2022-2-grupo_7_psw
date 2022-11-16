import React, { useState, useEffect } from "react";
import "./imageSlider.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { newsListState, slideCounterState, slideInfoState } from "../../recoil/atoms/slideState";
import useNewsList from "../../recoil/hooks/useNewsList";
// import useNewsIndex from "../../recoil/hooks/useNewsIndex";




const ImageSlider = () => {
    const slides = useNewsList();
    const [currentIndex, setCurrentIndex] = useRecoilState(slideCounterState);
    const [currentInfoState, setCurrentInfoState] = useRecoilState(slideInfoState);

    useEffect(() => {

        const myInterval = setInterval(() => {
            goToNext();
        }, 5000);
        return () => clearInterval(myInterval);
    }, []);


    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = () => {
        setCurrentIndex((prevTime) => prevTime === slides.length - 1 ? 0 : prevTime + 1);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }


    const togleInfo = () => {
        setCurrentInfoState(!currentInfoState);
    }



    const sliderStyles = {
        height: "100%",
        position: 'relative',
    };

    const slideStyles = {
        width: "100%",
        height: "100%",
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    const leftArrowStyles = {
        left: "12px",
    }

    const rightArrowStyles = {
        right: "12px",
    }

    const dotsContainterStyles = {
        display: "flex",
        justifyContent: "center"
    }

    const titleFont = {
        color: "white",
    }

    return (
        <div className="container containerStyles">
            <div style={sliderStyles} className="flex-item " onMouseOver={togleInfo} onMouseOut={togleInfo}>
                <div style={leftArrowStyles} onClick={goToPrevious} className="unselectable arrow">❰</div>
                <div style={rightArrowStyles} onClick={goToNext} className="unselectable arrow">❱</div>
                <div style={slideStyles}>
                    <div className="slideInfo flex-card info">
                        <div className="flex-card column margin-10">
                            <h1 className="margin-lr-10" style={titleFont}>{slides[currentIndex].title}</h1>
                            <p className={`${currentInfoState ? "subtitleFont" : "hidden"}`}>{slides[currentIndex].subtitle}</p>
                        </div>
                    </div>
                </div>
                <div style={dotsContainterStyles}>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} className={`${slideIndex === currentIndex ? "activeDotSyles" : "dotStyles"}`} onClick={() => goToSlide(slideIndex)}> ● </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
export default ImageSlider;
