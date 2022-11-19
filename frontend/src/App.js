import { Suspense } from "react";
import Header from "./components/header";
import Game from "./components/homeGame";
import ImageSlider from "./components/news/imageSlider";
import Footer from "./components/footer";
import { useState, useEffect } from "react";

export default function App() {
  const [page, setPage] = useState(0);
  const [display, setDisplay] = useState(false);
  const [gameList, setGamesList] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/api/list/${page}`).then((res) =>
      res.json().then((data) => {
        setGamesList(data.data);
        setDisplay(true);
      })
    );
  }, [page]);

  return (
    <>
      <Header />
      <div className="flex-container flex-row-reverse">
        <Suspense fallback={<h1 style={{color: "white"}}>Loading...</h1>}>
          <ImageSlider />
        </Suspense>

        {display ? (
        <ul className="col-lg-6">
          {gameList.map((e) => {
            return (
              <Game
                key={e.id}
                myKey={e.id}
                title={e.name}
                background_image={e.cover}
              />
            );
          })}
        </ul>          
        ) : (
          <>
            <ul className="col-lg-6">
              <Game />
              <Game />
              <Game />
              <Game />
              <Game />
            </ul>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

 /* <ul className="col-lg-8">
          {gameList.map((e) => {
            return (
              <Game
                key={e.id}
                myKey={e.id}
                title={e.name}
                background_image={e.cover}
              />
            );
          })}
        </ul>

        {display ? (
          <Footer />
        ) : (
          <>
            <ul className="col-lg-8">
              <Game />
              <Game />
              <Game />
              <Game />
              <Game />
            </ul>
          </>
        )}
      </div>
      <Footer /> */