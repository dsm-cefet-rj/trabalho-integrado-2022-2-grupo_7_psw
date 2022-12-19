import { BsDropletFill } from "react-icons/bs";
import { useRecoilState } from "recoil";
import {
  ratingStateAtom,
  hoverStateAtom,
} from "../recoil/atoms/screenLucasState";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { reviewState } from "../recoil/atoms/review";
import Select from 'react-select';

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

  const [status, setStatus] = useState('status');

  const options = [
    { value: 'playing', label: <p className="text-dark">Playing</p> },
    { value: 'finished', label: <p className="text-dark">Finished</p>},
    { value: 'paused', label: <p className="text-dark">Paused</p> },
    { value: 'all_achievements', label: <p className="text-dark">All achievements</p> },
  ];  

  let HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(`http://localhost:3001/review/update/${game_id}`, {
        method: "PUT",
        headers: customHeaders,
        body: JSON.stringify({
          text_review: text,
          game_id: game_id,
          rating: rating,
          date: new Date().toLocaleDateString("pt-BR"),
          favorite: favorite,
          status: status.value,
        }),
      });

      if (res.status === 200) {
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
        setMessage("Review updated successfully");
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
        id="updateReview"
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
                    {
                    <Select
                      defaultValue = {status}
                      onChange = {setStatus}
                      options = {options}
                    />
                    
                    /* <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Status
                    </button> */}

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
