import React from "react";
import { useEffect } from "react";
import ReviewForm from "./createReviewForm";
import { reviewState } from "../recoil/atoms/review";
import { useRecoilState } from "recoil";

// import useRatingState from "../recoil/hooks/useRatingState";
// import useHoverState from "../recoil/hooks/useHoverState";
function ScreenLucas({
  myCover,
  myDate,
  myCreator,
  myTitle,
  myDescription,
  myScreenshot,
  myRatingAvg,
  isReviewed,
}) {
  const [review, setReview] = useRecoilState(reviewState);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gameBackground = {
    backgroundImage: `url(${myScreenshot.replace(
      "t_thumb",
      "t_screenshot_big"
    )})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionY: "center",
    display: "inline-block",

    width: "100vw",
    height: "40vh",
    opacity: 0.4,
  };

  return (
    <>
      <header style={gameBackground} /* id="game-background" */></header>
      <div id="container">
        <section id="Game-Content">
          <div id="Poster">
            <img
              className=""
              src={myCover.replace("t_thumb", "t_cover_big")}
              alt="Game"
            />
            <h4 className="my-3" id="avrgRating">
              Average rating:
              <span className="text-warning"> {myRatingAvg || "Unknown"}</span>
            </h4>
            {isReviewed ? (
              <button className="btn btn-secondary">Reviewed</button>
            ) : (
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#createReview"
                data-bs-whatever="@mdo"
              >
                Rate and Review
              </button>
            )}
          </div>

          <div id="Game-Informations">
            <div className="HeadDescription">
              <h2 id="Game-Name">{myTitle}</h2>
              <h5>{myDate}</h5>
              <h5>Created by {myCreator}</h5>
            </div>
            <p id="Description">{myDescription}</p>
          </div>
        </section>
      </div>
      <ReviewForm />
    </>
  );
}

export default ScreenLucas;
