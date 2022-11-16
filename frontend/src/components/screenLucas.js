import { BsStarFill } from "react-icons/bs";
import React, { useState } from "react";

function ScreenLucas() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
      <header id="game-background"></header>
      <div id="container">
        <section id="Game-Content">
          <div id="Poster">
            <img
              className=""
              src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Celeste_box_art_final.png"
              alt="Game"
            />
            <h4 className="my-3" id="avrgRating">
              Average rating 4.8
            </h4>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              Rate and Review
            </button>
          </div>

          <div id="Game-Informations">
            <div className="HeadDescription">
              <h2 id="Game-Name">Celeste</h2>
              <h5>Year 2018</h5>
              <h5>Created by Maddy Torson</h5>
            </div>
            <p id="Description">
              Celeste is a 2018 platform game designed, directed and written by
              Maddy Thorson and programmed by Thorson and Noel Berry. It is a
              fully-fledged version of the 2016 PICO-8 game of the same name,
              which was made in four days solely by Thorson and Berry during a
              game jam. Set on a fictional version of Mount Celeste, it follows
              a young woman named Madeline who attempts to climb the mountain,
              and must face her inner demons in her quest to reach the summit.
              Celeste was released worldwide independently on January 25, 2018,
              on Windows, Nintendo Switch, PlayStation 4, Xbox One, macOS, and
              Linux, followed by a release on Google's Stadia on July 28, 2020.
              It consists of eight chapters, plus a free downloadable content
              chapter titled Farewell that acts as an epilogue to the story,
              released on September 9, 2019. Celeste received critical acclaim
              upon release, being praised for its story, gameplay, and
              soundtrack. It won several awards, including the Best Independent
              Game and Games for Impact awards at The Game Awards 2018, where it
              was also nominated for Game of the Year. Celeste was also a
              financial success, selling over a million copies by the end of
              2019.
            </p>
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
              <form>
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
                        <BsStarFill
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
                        <p className="dropdown-item" href="#">
                          All achievements
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScreenLucas;
