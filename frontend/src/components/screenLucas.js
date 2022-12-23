import React, { Suspense } from "react";
import { useEffect } from "react";
import ReviewForm from "./createReviewForm";
import { reviewState } from "../recoil/atoms/review";
import { useRecoilState, useRecoilValue } from "recoil";
import { userAtom } from "../recoil/atoms/userState";
import useGetreviewByGameAndUser from "../recoil/hooks/reviewHooks/getReviewByGameAndUser";
import { isReviewed } from "../recoil/atoms/isReviewed";

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
  gameId,
}) {
  const [review, setReview] = useRecoilState(reviewState);
  const user = useRecoilValue(userAtom);
  const [isReviewedUser, setIsReviewedUser] = useRecoilState(isReviewed);

  function HandleHook() {
    const queryParameters = `${gameId}/${user._id}`;
    const reviewContext = useGetreviewByGameAndUser(queryParameters || null);

    if (reviewContext[0].length > 0) {
      setIsReviewedUser(true);
    }
  }

  if (user) {
    HandleHook();
  }


  // if(reviewContext){
  //   reviewd = true;
  // }

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsReviewedUser(false);
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

  const buttonStyle = {
    // color: "white",
    fontSize: 20
  }
  return (
    <>
      <Suspense>
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
                <span className="text-warning">
                  {" "}
                  {myRatingAvg || "Unknown"}
                </span>
              </h4>
              {isReviewedUser ? (
                <button
                  className="secondary-style-button"
                  style={{ fontSize: "20px" }}
                >Reviewed</button>
              ) : (
                user ? (
                  <button
                    type="button"
                    className="primary-style-button"
                    data-bs-toggle="modal"
                    data-bs-target="#createReview"
                    data-bs-whatever="@mdo"
                    style={buttonStyle}
                  >
                    Rate and Review
                  </button>
                ) : (
                  <a
                    
                    className="primary-style-button"                
                    style={buttonStyle}
                    href="http://localhost:3000/signIn"
                  >
                    Sign in to review
                  </a>


                )
              )
              }
            </div>

            <div id="Game-Informations">
              <div className="HeadDescription">
                <h2 id="Game-Name">{myTitle}</h2>
                <h5>{myDate}</h5>
                <h5>Created by {myCreator}</h5>
              </div>
              <p id="Description" style={{ fontSize: "18px" }}>{myDescription}</p>
            </div>
          </section>
        </div>
      </Suspense>
      {user ? (
        <ReviewForm />
      ) : (
        null
      )

      }
    </>
  );
}

export default ScreenLucas;
