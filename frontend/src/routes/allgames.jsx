import Header from "../components/header";
import Game from "../components/imageGameList";
import { Link } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import Select from "react-select";
import "./allgames.css";

export default function Overview() {
  const [id, setId] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/getreview")
      .then((res) => res.json())
      .then((data) => setId(data.data));
  }, []);

  const options = [
    { value: "all_games", label: <p className="text-dark">All games</p> },
    { value: "playing", label: <p className="text-dark">Playing</p> },
    { value: "finished", label: <p className="text-dark">Finished</p> },
    { value: "paused", label: <p className="text-dark">Paused</p> },
    {
      value: "all_achievements",
      label: <p className="text-dark">All achievements</p>,
    },
  ];

  const [status, setStatus] = useState(null);

  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Header />
      </Suspense>{" "}
      <div className="my-5">
        <div className="col-11 mx-auto border-bottom border-secondary d-flex gap-4">
          <Link to="/profile">
            <p className="text-light fs-6">Overview</p>
          </Link>

          <div className=" border-bottom">
            <Link to="/profile/allgames">
              <p className="text-light fs-6">All Games</p>
            </Link>
          </div>
          <Link to="/profile/myreviews">
            <p className="text-light fs-6">Reviews</p>
          </Link>
        </div>
      </div>
      <div className="container">
        <Select
          className="select-status"
          defaultValue={status}
          onChange={setStatus}
          options={options}
        />
        <br></br>

        {id.map((jogosDoUsuario) => {
          if (status) {
            if (status.value === "all_games") {
              return <Game id={jogosDoUsuario.game_id} />;
            } else if (jogosDoUsuario.status === status.value) {
              return <Game id={jogosDoUsuario.game_id} />;
            }
          }
        })}
      </div>
    </>
  );
}
