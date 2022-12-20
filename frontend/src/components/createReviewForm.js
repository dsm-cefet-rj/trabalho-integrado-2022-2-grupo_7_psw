import { BsDropletFill } from "react-icons/bs";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  ratingStateAtom,
  hoverStateAtom,
} from "../recoil/atoms/screenLucasState";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { reviewState } from "../recoil/atoms/review";
import Select from "react-select";

import cn from "classnames";
import { authAtom, userAtom } from "../recoil/atoms/userState";

import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";


// import useRatingState from "../recoil/hooks/useRatingState";
// import useHoverState from "../recoil/hooks/useHoverState";

export default function ReviewForm() {
  const [rating, setRating] = useRecoilState(ratingStateAtom);
  const [hover, setHover] = useRecoilState(hoverStateAtom);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const customHeaders = {
    "Content-Type": "application/json",
  };
  const game_id = useParams().id;
  const [review, setReview] = useRecoilState(reviewState);

  const [favorite, setFavorite] = useState(null);
  const [hoverFavorite, setHoverFavorite] = useState(null);

  const [status, setStatus] = useState("status");

  const currentAuth = useRecoilValue(authAtom)
  const userCurrent = useRecoilValue(userAtom)

  const options = [
    { value: "playing", label: <p className="text-dark">Playing</p> },
    { value: "finished", label: <p className="text-dark">Finished</p> },
    { value: "paused", label: <p className="text-dark">Paused</p> },
    {
      value: "all_achievements",
      label: <p className="text-dark">All achievements</p>,
    },
  ];

  const handleClick = (e) => {
    if (userCurrent == null) {
      NotificationManager.error(
        "You must have an account to create an review",
        "Error",
        3000
      );
    }
  };

  let HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:3001/review/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + currentAuth,
        },
        body: JSON.stringify({
          text_review: text,
          game_id: game_id,
          rating: rating,
          date: new Date().toLocaleDateString("pt-BR"),
          favorite: favorite,
          status: status.value,
          user: userCurrent._id,
          username: userCurrent.username,
          profilePicture: userCurrent.pictureUrl,
        }),
      });

      if (res.status === 201) {
        setReview([
          {
            text_review: text,
            game_id: game_id,
            rating: rating,
            date: new Date().toLocaleDateString("pt-BR"),
          },
        ]);
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
  return (
    <>
      <div
        className="modal fade"
        id="createReview"
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
                <div class="container-fluid p-0">
                  <div clasName="row d-flex">
                    <label
                      for="message-text"
                      className="col-form-label text-dark"
                    >
                      Rating:
                    </label>
                    <div className="d-flex m-2">
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
                      <div className="favorites ms-auto">
                        {[...Array(1)].map((favorites, i) => {
                          const heart = i + 1;

                          return (
                            <label>
                              <input
                                type="radio"
                                name="heart"
                                value={heart}
                                onClick={() => setFavorite(heart)}
                              />
                              <AiFillHeart
                                className="star"
                                color={
                                  heart <= (hoverFavorite || favorite)
                                    ? "DC143C"
                                    : "e4e5e9"
                                }
                                size={50}
                                onMouseEnter={() => setHoverFavorite(heart)}
                                onMouseLeave={() => setHoverFavorite(null)}
                              />
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
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
                    {
                      <Select
                        defaultValue={status}
                        onChange={setStatus}
                        options={options}
                      />
                      /* <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      Status
                    </button> */
                    }

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <p className="dropdown-item" href="#" value="Playing">
                          Playing
                        </p>
                      </li>

                      <li>
                        <p className="dropdown-item" href="#" value="Finished">
                          Finished
                        </p>
                      </li>

                      <li>
                        <p className="dropdown-item" href="#" value="Paused">
                          Paused
                        </p>
                      </li>

                      <li>
                        <p
                          className="dropdown-item"
                          href="#"
                          value="All achievements"
                        >
                          All achievements
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                {!message ? (
                  <button type="submit" className="btn btn-primary" onClickCapture={handleClick}>
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
            </div>
          </div>
        </div>
      </div>
      <NotificationContainer/>
    </>
  );
}
