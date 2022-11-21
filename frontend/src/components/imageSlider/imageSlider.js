import React, { useEffect } from "react";
import "./imageSlider.css";
import useNewsList from "../../recoil/hooks/useNewsList";
import useNewsCurrentIndex from "../../recoil/hooks/useNewsCurrentIndex";
import useSubtitleState from "../../recoil/hooks/useSubtitleState";
import useUpdateNewsIndex from "../../recoil/hooks/useUpdateNewsIndex";
import useToggleSubtitleState from "../../recoil/hooks/useToggleSubtitleState";
import useHighlightNews from "../../recoil/hooks/useHighlightNews";




const ImageSlider = () => {

    const slides = useHighlightNews();
    const currentIndex = useNewsCurrentIndex();
    const subtitleState = useSubtitleState();
    
    const updateIndex = useUpdateNewsIndex();
    const toggleSubtitleState = useToggleSubtitleState();
    

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        updateIndex(newIndex)
    }

    const goToNext = () => {
        const newIndex = currentIndex === slides.length -1? 0: currentIndex + 1;        
        updateIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        updateIndex(slideIndex);
    }

    useEffect(() => {
        const myInterval = setInterval(() => {
            goToNext();
        }, 5000);
        return () => clearInterval(myInterval);
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex]);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles = {
    left: "12px",
  };

  const rightArrowStyles = {
    right: "12px",
  };

  const dotsContainterStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const titleFont = {
    color: "white",
  };

    return (
 
        <div className="container containerStyles">
            <div style={sliderStyles} className="flex-item " onMouseOver={toggleSubtitleState} onMouseOut={toggleSubtitleState}>
                <div style={leftArrowStyles} onClick={goToPrevious} className="unselectable arrow">❰</div>
                <div style={rightArrowStyles} onClick={goToNext} className="unselectable arrow">❱</div>
                <div style={slideStyles}>
                    <div className="slideInfo flex-card info">
                        <div className="flex-card column margin-10">
                            <h1 className="margin-lr-10" style={titleFont}>{slides[currentIndex].title}</h1>
                            <p className={`${subtitleState ? "subtitleFont" : "hidden"}`}>{slides[currentIndex].subtitle}</p>
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
};
export default ImageSlider;
