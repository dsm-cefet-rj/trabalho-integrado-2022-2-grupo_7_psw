import { BsDropletFill } from "react-icons/bs";
import React from "react";
import { useRecoilState } from "recoil";
import {
  ratingStateAtom,
  hoverStateAtom,
} from "../recoil/atoms/screenLucasState";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  const [text, setText] = useState("");
  const [rating, setRating] = useRecoilState(ratingStateAtom);
  const [hover, setHover] = useRecoilState(hoverStateAtom);
  const [message, setMessage] = useState("");

  const customHeaders = {
    "Content-Type": "application/json",
  };
  const game_id = useParams().id;

  let HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3001/review/new", {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify({
          text_review: text,
          game_id: game_id,
          rating: rating,
          date: new Date().toLocaleDateString("pt-BR"),
        }),
      });

      if (res.status === 200) {
        setText("");
        setRating(null);
        setMessage("Review created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

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
                data-bs-target="#exampleModal"
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

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-dark" id="exampleModalLabel">
                Give it a Drop!
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={HandleSubmit}>
                <div className="stars">
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                      <label>
                        <input
                          type="radio"
                          name="rating"
                          value={ratingValue}
                          onClick={() => setRating(ratingValue)}
                        />
                        <BsDropletFill
                          className="star"
                          color={
                            ratingValue <= (hover || rating)
                              ? "0077b6"
                              : "e4e5e9"
                          }
                          size={50}
                          onMouseEnter={() => setHover(ratingValue)}
                          onMouseLeave={() => setHover(null)}
                        />
                        ;
                      </label>
                    );
                  })}
                </div>
                <div className="mb-3">
                  <label
                    for="message-text"
                    className="col-form-label text-dark"
                  >
                    Drop:
                  </label>
                  <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="form-control"
                    id="message-text"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Status
                    </button>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <p className="dropdown-item" href="#">
                          Playing
                        </p>
                      </li>

                      <li>
                        <p className="dropdown-item" href="#">
                          Finished
                        </p>
                      </li>

                      <li>
                        <p classNameName="dropdown-item" href="#">
                          All achievements
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                {!message ? (
                  <button type="submit" className="btn btn-primary">
                    Send Review
                  </button>
                ) : (
                  <button className="btn btn-secondary" type="button">
                    Submited
                  </button>
                )}
              </form>
            </div>
            <div className="modal-footer">
              {message ? (
                <p className="text-success mx-auto">{message}</p>
              ) : null}
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScreenLucas;
