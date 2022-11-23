import Game from "../components/game";
import { Link } from "react-router-dom";

export default function Overview() {
  return (
    <>
      <div className="my-5 col-11 mx-auto">
        <div className="col-11 mx-auto border-bottom border-secondary d-flex gap-4">
          <div className=" border-bottom">
            <Link to="/profile">
              <p className="text-light fs-6">Overview</p>
            </Link>
          </div>

          <Link to="/profile/allgames">
            <p className="text-light fs-6">All Games</p>
          </Link>

          <Link to="/profile/myreviews">
            <p className="text-light fs-6">Reviews</p>
          </Link>
        </div>
        <div className="row col-11 mx-auto">
          <div className="col-11 mx-auto">
            <div className="col-12 my-5 flex-column-reverse justify-content flex-md-row mx-4 mx-md-3">
              <h3>Favorite from User</h3>
            </div>
            <div className="d-flex flex-wrap gap-3">
              <div className="col-8 col-md-4 col-lg-2 col-xl-2">
                <Game gameImage="https://static-cdn.jtvnw.net/ttv-boxart/490147_IGDB-272x380.jpg" />
              </div>
              <div className="col-8 col-md-4 col-lg-2 col-xl-2">
                <Game gameImage="https://image.api.playstation.com/vulcan/ap/rnd/202105/1412/bJYCCmymxvgviuuolfOx8srg.png" />
              </div>
              <div className="col-8 col-md-4 col-lg-2 col-xl-2">
                <Game gameImage="https://www.gamingdragons.com/images/game_img/persona4golden.jpg" />
              </div>
              <div className="col-8 col-md-4 col-lg-2 col-xl-2">
                <Game gameImage="https://store-images.s-microsoft.com/image/apps.64690.14291162525435146.863a4856-e937-4f6f-81c8-efcb52a1546f.725b97dc-d011-43fd-99bd-409a35646882" />
              </div>
              <div className="col-8 col-md-4 col-lg-2 col-xl-2">
                <Game gameImage="https://assets-prd.ignimgs.com/2021/12/08/portal2-1638924084230.jpg" />
              </div>
              <div className="col-8 col-md-4 col-lg-2 col-xl-2">
                <Game gameImage="https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png" />
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </>
  );
}
