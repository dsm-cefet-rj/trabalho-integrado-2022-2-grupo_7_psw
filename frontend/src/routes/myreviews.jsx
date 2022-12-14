import Header from "../components/header";
import Review from "../components/review";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Overview({ origem }) {
  const [review, setReview] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/getreview`)
      .then((res) => res.json())
      .then((data) => setReview(data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <div className="my-5">
        <div className="col-11 mx-auto border-bottom border-secondary d-flex gap-4">
          <Link to="/profile">
            <p className="text-light fs-6">Overview</p>
          </Link>

          <Link to="/profile/allgames">
            <p className="text-light fs-6">All Games</p>
          </Link>

          <div className=" border-bottom">
            <Link to="profile/myreviews">
              <p className="text-light fs-6">Reviews</p>
            </Link>
          </div>
        </div>
      </div>
      {review.map((e) => {
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
          />
        );
      })}
    </>
  );
}
