import Header from "../components/header";
import Game from "../components/imageGameList";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import Select from "react-select";

export default function Overview() {
  const [id, setId] = useState([]);
  const username = useParams().username;

  useEffect(() => {
    fetch(`http://localhost:3001/getreviewbyuser/${username}`)
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

  const [status, setStatus] = useState({
    value: "all_games",
    label: <p className="text-dark">All games</p>,
  });


  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Header />
      </Suspense>      
      <div className="my-5">
        <div className="col-11 mx-auto border-bottom border-secondary d-flex gap-4">
          <Link to={`/dropprUser/${username}`}>
            <p className="text-light fs-6">Overview</p>
          </Link>

          <div className=" border-bottom">
            <Link to={`/dropprUser/allgamesUser/${username}`}>
              <p className="text-light fs-6">All Games</p>
            </Link>
          </div>
          <Link to={`/dropprUser/myreviewsUser/${username}`}>
            <p className="text-light fs-6">Reviews</p>
          </Link>
        </div>
      </div>
      <div className="container">
        <p className="text-secondary">&nbsp;&nbsp;Filter games by status</p>
        <Select
          className="select-status"
          defaultValue={status}
          onChange={setStatus}
          options={options}
          isSearchable={false}
        />
        <br></br>
        {id.map((jogosDoUsuario) => {
          if (status.value === undefined) {
            return <Game id={jogosDoUsuario.game_id} />;
          } else if (status.value === "all_games") {
            return <Game id={jogosDoUsuario.game_id} />;
          } else if (jogosDoUsuario.status === status.value) {
            return <Game id={jogosDoUsuario.game_id} />;
          }
        })}
      </div>
    </>
  );
}
