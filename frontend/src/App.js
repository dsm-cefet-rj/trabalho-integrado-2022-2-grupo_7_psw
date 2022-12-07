import Header from "./components/header";
import Game from "./components/homeGame";
import Footer from "./components/footer";
import { useState, useEffect } from "react";
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

import "./App.css";

export default function App() {
  const [gamesList, setGamesList] = useState([]);
  const [page, setPage] = useState(0);
  const [display, setDisplay] = useState(false);
  const [last5Reviews, setLast5Reviews] = useState([]);
  const reviews = useRecoilValue(reviewState);

  //MUDE ESSA VARIÁVEL PARA TRUE PARA VER A TELA NORMAL E FALSE SE QUISER VÊ-LA COMO UM USUÁRIO NÃO LOGADO
  const logado = false;

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

  if (logado) {
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
                      stars={e.rating}
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
  } else {
    return (
      <>
        <Header /* childToParent={childToParent} */ />
        <div className="ConvincingMessage container text-center mt-5">
          <div class="row align-items-center">
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
                Share yours favorites games with your friends
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

        <div className="container mt-5">
          <div className="col-12 mt-5">
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
        </div>
      </>
    );
  }
}
