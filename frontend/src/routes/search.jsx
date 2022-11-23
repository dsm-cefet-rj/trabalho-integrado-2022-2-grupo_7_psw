import Header from "../components/header";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Game from "../components/homeGame";

export default function Search() {
  const numPagination = 15;

  const [gamesList, setGamesList] = useState([]);
  const [page, setPage] = useState(0);
  const [gameCount, setGameCount] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const [button1, setButton1] = useState(1);
  const [button2, setButton2] = useState(2);
  const [button3, setButton3] = useState(3);
  const [button4, setButton4] = useState(4);
  const [button5, setButton5] = useState(5);

  const name = useParams().name;
  useEffect(() => {
    fetch(`http://localhost:3001/api/query/${name}/${page}`).then((res) =>
      res.json().then((data) => {
        if (data.data.length > 0) {
          setGamesList(data.data);
        }
      })
    );
    fetch(`http://localhost:3001/api/count/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setGameCount(data.data[0].count);
        setPageCount(Math.floor(data.data[0].count / numPagination));
      });
  }, [page, name]);

  console.log(gameCount);
  return (
    <>
      <Header />
      <h5 className="mt-5 mx-5 text-secondary">
        Encontrado {gameCount} jogos para sua busca:{" "}
      </h5>
      <h5 className=" mx-5 text-secondary">
        Numero de paginas = {pageCount + 1};
      </h5>
      <ul className="p-0">
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
      {pageCount > 0 ? (
        <div className="col-4 mx-auto d-flex gap-2 my-5 flex-wrap">
          {/*         <button
          onClick={() => {
            if (page - 1 < 0) {
              return;
            }
            setPage(page - 1);
            window.scrollTo(0, 0);
          }}
          type="button"
          className="btn btn-light btn-lg"
        >
          Previous
        </button>
        <span className="text-light mx-4">Page:{page}</span>

        <button
          onClick={() => {
            setPage(page + 1);
            window.scrollTo(0, 0);
          }}
          type="button"
          className="btn btn-light btn-lg"
        >
          Next
        </button> */}

          <button
            onClick={() => {
              if (button1 > 1) {
                setButton3(button1);
                setButton2(button1 - 1);
                setButton4(button1 + 1);
                setButton5(button1 + 2);
                setButton1(button1 - 2);
              }
              setPage(button1 - 1);
              window.scrollTo(0, 0);
            }}
            className="btn btn-light btn-lg"
          >
            {button1}
          </button>
          <button
            onClick={() => {
              setPage(button2 - 1);
              window.scrollTo(0, 0);
            }}
            className="btn btn-light btn-lg"
          >
            {button2}
          </button>
          <button
            onClick={() => {
              setPage(button3 - 1);
              window.scrollTo(0, 0);
            }}
            className="btn btn-light btn-lg"
          >
            {button3}
          </button>
          <button
            onClick={() => {
              setPage(button4 - 1);
              window.scrollTo(0, 0);
            }}
            className="btn btn-light btn-lg"
          >
            {button4}
          </button>
          <button
            onClick={() => {
              setButton3(button5);
              setButton2(button5 - 1);
              setButton1(button5 - 2);
              setButton4(button5 + 1);
              setButton5(button5 + 2);

              setPage(button5 - 1);
              window.scrollTo(0, 0);
            }}
            className="btn btn-light btn-lg"
          >
            {button5}
          </button>
        </div>
      ) : null}
    </>
  );
}
