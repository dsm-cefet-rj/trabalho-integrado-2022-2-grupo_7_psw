import Header from "../components/header";
import Game from "../components/imageGameList";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Overview() {
  const [id, setId] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3001/getreview")
    .then((res) => res.json())
    .then((data) => setId(data.data));
  }, []);
  
  return (
    <>
      <Header />
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

      {id.map((jogosDoUsuario) => {
        return <Game id={jogosDoUsuario.game_id}/>;
      })}
      </div>

    </>
  );
}
