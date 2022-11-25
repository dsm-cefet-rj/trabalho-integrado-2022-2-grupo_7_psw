import Header from "./components/header";
import Game from "./components/homeGame";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
import {
  BsFillDropletFill,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import Review from "./components/review";
import { reviewState } from "./recoil/atoms/review";
import { useRecoilValue } from "recoil";

export default function App() {
  const [gamesList, setGamesList] = useState([]);
  const [page, setPage] = useState(0);
  const [display, setDisplay] = useState(false);
  const [last5Reviews, setLast5Reviews] = useState([]);
  const reviews = useRecoilValue(reviewState);

  useEffect(() => {
    fetch(`http://localhost:3001/api/list/${page}`).then((res) =>
      res.json().then((data) => {
        setGamesList(data.data);
        setDisplay(true);
      })
    );
    fetch(`http://localhost:3001/getreview`)
      .then((res) => res.json())
      .then((data) => setLast5Reviews(data.data.slice(-5)))
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <>
      <Header /* childToParent={childToParent} */ />
      <div className="d-flex flex-md-row flex-column-reverse">
        <div className="col-lg-7">
          <ul className="m-0 p-0">
            {gamesList.map((e) => {
              return (
                <Game
                  key={e.id}
                  myKey={e.id}
                  background_image={e.cover}
                  title={e.name}
                  category={e.category}
                  genres={e.genres}
                  platforms={e.platforms}
                />
              );
            })}
          </ul>
          {display ? (
            <div className="col-12 col-md-6 mx-auto d-flex justify-content-center mb-5">
              <BsFillArrowLeftCircleFill
                className="homePageArrow"
                size={40}
                onClick={() => {
                  if (page - 1 < 0) {
                    return;
                  }
                  setPage(page - 1);
                  window.scrollTo(0, 0);
                }}
              />
              <span className="text-light mx-4">Page:{page}</span>
              <BsFillArrowRightCircleFill
                className="homePageArrow"
                size={40}
                onClick={() => {
                  setPage(page + 1);
                  window.scrollTo(0, 0);
                }}
              />
            </div>
          ) : (
            <h1 className="text-light mt-5 fs-4 mx-5">
              Waiting for the server...
            </h1>
          )}
        </div>
        <div className="d-flex flex-column align-items-center mx-auto">
          <h1 className="mt-5 text-light text-center mx-auto">
            Welcome to Droppr
          </h1>
          <BsFillDropletFill color="deepskyblue" size={50} />
          <div className="my-5">
            <div className="mx-auto border-bottom border-secondary">
              <p className="text-secondary fs-6 text-center">
                Recent reviews (last 5 reviews)
              </p>
            </div>
            <ul className="d-flex flex-column-reverse">
              {last5Reviews.length == 0 ? (
                <h4 className="text-secondary my-3">No reviews yet.</h4>
              ) : null}

              {last5Reviews.map((e) => {
                return (
                  <Review
                    stars={e.numOfstars}
                    title={e.titleReview}
                    cover={e.coverReview}
                    release={e.yearRelease}
                    text={e.text_review}
                    checkout={false}
                    date={e.date}
                    game_id={e.game_id}
                    favorited={false}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {display ? <Footer /> : null}
    </>
  );
}
