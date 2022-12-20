import Header from "../components/header";
import Review from "../components/review";
import { Link } from "react-router-dom";
import { reviewState } from "../recoil/atoms/review";
import { useRecoilState } from "recoil";
import { Suspense } from "react";

export default function Reviews() {
  const [review, setReview] = useRecoilState(reviewState);
  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Header />
      </Suspense>
      <div className="my-5">
        <div className="col-11 mx-auto border-bottom border-secondary d-flex gap-4">
          <Link to="/reviews">
            <p className="text-light fs-6">Reviews</p>
          </Link>

          <Link to="/reviews/favorites">
            <p className="text-light fs-6">Favorites</p>
          </Link>
          <div className=" border-bottom border-light">
            <Link to="/reviews/popular">
              <p className="text-light fs-6">Popular</p>
            </Link>
          </div>
        </div>
      </div>
      {review.map((e) => {
        return (
          <Review
            title={e.titleReview}
            cover={e.coverReview}
            release={e.yearRelease}
            text={e.text_review}
            game_id={e.game_id}
            date={e.date}
            checkout={e.checkOut}
            stars={e.numOfstars}
          />
        );
      })}
    </>
  );
}
