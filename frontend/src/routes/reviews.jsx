import Header from "../components/header";
import Review from "../components/review";
import { Link } from "react-router-dom";

import { Suspense, useEffect, useState } from "react";

export default function Reviews() {
  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/getreview`)
      .then((res) => res.json())
      .then((data) => setReviewList(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Header />
      </Suspense>
      <div className="my-5">
        <div className="col-11 mx-auto border-bottom border-secondary d-flex gap-4">
          <div className=" border-bottom border-light">
            <Link to="/reviews">
              <p className="text-light fs-6">Reviews</p>
            </Link>
          </div>

          <Link to="/reviews/favorites">
            <p className="text-light fs-6">Favorites</p>
          </Link>
          <Link to="/reviews/popular">
            <p className="text-light fs-6">Popular</p>
          </Link>
        </div>
      </div>
      {reviewList.length === 0 ? (
        <h1 className="text-secondary mx-5">No reviews yet.</h1>
      ) : null}
      {reviewList.map((e) => {
        return (
          <Review
            text={e.text_review}
            game_id={e.game_id}
            date={e.date}
            stars={e.rating}
          />
        );
      })}
    </>
  );
}
