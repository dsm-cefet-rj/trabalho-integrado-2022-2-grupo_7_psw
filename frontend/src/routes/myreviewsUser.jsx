import Header from "../components/header";
import Review from "../components/review";
import { Link } from "react-router-dom";
import { reviewState } from "../recoil/atoms/review";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";

export default function Overview() {
  const [last5Reviews, setLast5Reviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/getreview`)
      .then((res) => res.json())
      .then((data) => setLast5Reviews(data.data.slice(-5)))
      .catch((error) => console.log(error));
  });

  return (
    <>
      <Header />
      <div className="my-5">
        <div className="col-11 mx-auto border-bottom border-secondary d-flex gap-4">
          <Link to="/dropprUser">
            <p className="text-light fs-6">Overview</p>
          </Link>

          <Link to="/dropprUser/allgamesUser">
            <p className="text-light fs-6">All Games</p>
          </Link>

          <div className=" border-bottom">
            <Link to="dropprUser/myreviewsUser">
              <p className="text-light fs-6">Reviews</p>
            </Link>
          </div>
        </div>
      </div>
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
    </>
  );
}
