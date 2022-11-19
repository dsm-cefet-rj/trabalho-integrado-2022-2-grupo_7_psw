import Header from "../components/header";
import Review from "../components/review";
import { Link } from "react-router-dom";
import { reviewState } from "../recoil/atoms/review";
import { useRecoilValue } from "recoil";

export default function Reviews() {
  const review = useRecoilValue(reviewState);
  return (
    <>
      <Header />
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
      {review.length === 0 ? (
        <h1 className="text-secondary mx-5">No reviews yet.</h1>
      ) : null}
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
