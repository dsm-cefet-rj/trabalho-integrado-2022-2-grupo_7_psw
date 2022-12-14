import Header from "./components/header";
import Game from "./components/homeGame";
import Footer from "./components/footer";
import { useState, useEffect, Suspense } from "react";
import {
  BsFillDropletFill,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsShareFill,
} from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { CgGames } from "react-icons/cg";
import { GiArchiveResearch } from "react-icons/gi";
import Review from "./components/review";
import { reviewState } from "./recoil/atoms/review";
import { useRecoilValue } from "recoil";
import { login } from "./recoil/atoms/login";

import "./App.css";
import { authAtom, userAtom } from "./recoil/atoms/userState";

import { VscArrowSmallRight,  VscArrowSmallLeft } from "react-icons/vsc";

export default function App() {
  const [gamesList, setGamesList] = useState([]);
  const [page, setPage] = useState(0);
  const [display, setDisplay] = useState(false);
  const [last5Reviews, setLast5Reviews] = useState([]);
  const reviews = useRecoilValue(reviewState);

  // Essa variável representa o valor do estado global de login. Que é true quando um usuário está logado e false caso contrário
  const mylogin = useRecoilValue(authAtom);
  const userCurrent = useRecoilValue(userAtom);

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

  if (mylogin) {
    return (
      <>
        <Suspense fallback={<h2>loading...</h2>}>
          <Header />
        </Suspense>
        <div className="d-flex flex-md-row flex-column-reverse">
          <div className="col-lg-7">
            <ul className="m-0 p-0">
              {gamesList.map((e) => {
                return (
                  <Suspense fallback={<h2>loading...</h2>}>
                  <Game
                    key={e.id}
                    myKey={e.id}
                    background_image={e.cover}
                    title={e.name}
                    category={e.category}
                    genres={e.genres}
                    platforms={e.platforms}
                    />
                  </Suspense>
                );
              })}
            </ul>
            {display ? (
              <div className="col-12 col-md-6 mx-auto d-flex justify-content-center mb-5">
                <VscArrowSmallLeft
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
                <span className="text-light mt-2 mx-4">{page +1}</span>
                <VscArrowSmallRight
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
              <ul className="flex-column-reverse last-rev-container">
                {last5Reviews.length == 0 ? (
                  <h4 className="text-secondary my-3">No reviews yet.</h4>
                ) : null}

                {last5Reviews.map((e) => {
                  return (
                    <Review
                      key={e.game_id}
                      stars={e.rating}
                      title={e.titleReview}
                      cover={e.coverReview}
                      release={e.yearRelease}
                      text={e.text_review}
                      checkout={false}
                      date={e.date}
                      game_id={e.game_id}
                      favorited={false}
                      username={e.username}
                      user_id={e.user}
                      profilePicture={e.profilePicture}
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
  } else {
    return (
      <>
        <Suspense fallback={<h2>loading...</h2>}>
          <Header />
        </Suspense>
        <div className="ConvincingMessage container-fluid text-center mt-5">
          <div className="row align-items-center">
            <div className="col-2" />
            <div className="LoginMessageContent col-8 m-5">
              <h2 className="LoginMessage">
                For a lot more content like this, consider logging in!
              </h2>
              <h3 className="LoginMessageSecond">
                Track, share, and discover your favorite game with Droppr.
              </h3>
            </div>
            <div className="col-2" />
          </div>

          <div className="d-flex flex-row mt-md-5">
            <div className="col-6">
              <BsShareFill size={35} />
              <h3 className="benefits m-3">
                Share your favorite games with your friends
              </h3>
            </div>
            <div className="col-6">
              <VscPreview size={35} />
              <h3 className="benefits m-3">Review the games that you love</h3>
            </div>
          </div>
          <div className="d-flex flex-md-row mt-md-5">
            <div className="col-6">
              <CgGames size={35} />
              <h3 className="benefits m-3">
                Keep track of the games that you've played
              </h3>
            </div>
            <div className="col-6">
              <GiArchiveResearch size={35} />
              <h3 className="benefits m-3">Discover new and exciting games!</h3>
            </div>
          </div>
          <div className="m-5">
            <a href="/signIn">
              <button className="botao">Join us!</button>
            </a>
          </div>
        </div>

        <hr className="divisao"></hr>

        <div className="container-fluid mt-5">
          <div className="col-12 mt-5 game-list-container">
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
                <span className="text-light mt-2 mx-4">Page:{page +1}</span>
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
        </div>
          <Footer />
      </>
    );
  }
}
