import Game from "../components/imageGameList";
import { Link } from "react-router-dom";
import { userAtom } from "../recoil/atoms/userState"
import { useState, useEffect } from "react"
import { useRecoilValue } from "recoil"
import{ useParams } from "react-router-dom"

export default function Overview() {
  const [id, setId] = useState([]);

  const username = useParams().username;
  
  useEffect(() => {
    fetch(`http://localhost:3001/getfavorite/${username}`)
      .then((res) => res.json())
      .then((data) => setId(data.data));
  }, []);

  return (
    <>
      <div className="my-5 col-11 mx-auto">
        <div className="col-11 mx-auto border-bottom border-secondary d-flex gap-4">
          <div className=" border-bottom">
            <Link to={`/dropprUser/${username}`}>
              <p className="text-light fs-6">Overview</p>
            </Link>
          </div>

          <Link to={`/dropprUser/allgamesUser/${username}`}>
            <p className="text-light fs-6">All Games</p>
          </Link>

          <Link to={`/dropprUser/myreviewsUser/${username}`}>
            <p className="text-light fs-6">Reviews</p>
          </Link>
        </div>

        <div className="row col-11 mx-auto">
          <div className="col-11 mx-auto">
            <div className="col-12 my-5 flex-column-reverse justify-content flex-md-row mx-4 mx-md-3">
              <h3>Favorite from User</h3>
            </div>
            <div className="d-flex flex-wrap gap-3">
            {id.map((jogosFavoritos) => {
              return <Game id={jogosFavoritos.game_id} />;
            })}
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}
