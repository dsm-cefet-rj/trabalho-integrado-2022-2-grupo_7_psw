import Header from "../components/header";
import Review from "../components/review";
import { Link } from "react-router-dom";
import { reviewState } from "../recoil/atoms/review";
import { useRecoilState } from "recoil";
import { Suspense, useState, useEffect } from "react";
import { authAtom, userAtom } from "../recoil/atoms/userState";
import { useRecoilValue } from "recoil"

export default function Reviews() {
  const [review, setReview] = useRecoilState(reviewState);
  const [id, setId] = useState([]);
  const userCurrent = useRecoilValue(userAtom);

  useEffect(() => {
    fetch(`http://localhost:3001/getreview`)
      .then((res) => res.json())
      .then((data) => setId(data.data));
  }, []);


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

          <div className=" border-bottom border-light">
            <Link to="/reviews/favorites">
              <p className="text-light fs-6">Favorites</p>
            </Link>
          </div>

        </div>
      </div>
      {id
        .map((e) => {
          if(e.favorite)
          return (
            <Review
            key={e._id}
            stars={e.rating}
            title={e.titleReview}
            cover={e.coverReview}
            release={e.yearRelease}
            text={e.text_review}
            checkout={false}
            date={e.date}
            game_id={e.game_id}
            username={e.username}
            user_id={e.user}
            profilePicture={e.profilePicture}
            />
          );
        })}
    </>
  );
}
