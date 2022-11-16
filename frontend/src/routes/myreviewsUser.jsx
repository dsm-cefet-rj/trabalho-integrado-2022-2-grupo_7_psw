import Header from "../components/header";
import GameHome from "../components/homeGame";
import Review from "../components/review";
import { Link } from "react-router-dom";
import Game from "../components/game"

export default function Overview() {
    return (
    <>
      <Header />
      <div className="my-5">
        <div className="col-11 mx-auto border-bottom border-secondary d-flex gap-4">
          <Link to="/dropprUser">
            <p className="text-light fs-6">Overview</p>
          </Link>

          <Link to= "/dropprUser/allgamesUser" >
            <p className="text-light fs-6">All Games</p>
          </Link>

          <div className=" border-bottom">
            <Link to="dropprUser/myreviewsUser">
              <p className="text-light fs-6">Reviews</p>
            </Link>
          </div>
        </div>
      </div>
      <Review />
      <Review />
      <Review />
    </>
  );
}
