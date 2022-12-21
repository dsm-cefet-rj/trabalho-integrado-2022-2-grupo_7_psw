import {
  BsHeart,
  BsCartDash,
  BsBookmark,
  BsBookmarkCheck,
} from "react-icons/bs";
import UpdateReviewForm from "./updateReviewForm";
import AddToList from "./addToListForm";
import { reviewState } from "../recoil/atoms/review";
import { useRecoilState, useRecoilValue } from "recoil";
import { redirect, useParams } from "react-router-dom";
import axios from "axios";
import { userAtom } from "../recoil/atoms/userState";
import { isReviewed } from "../recoil/atoms/isReviewed";

export default function ReviewConfig({ myList }) {
  let id = useParams().id;
  const [review, setReview] = useRecoilState(reviewState);
  const user = useRecoilValue(userAtom);
  const [isReviewedUser, setIsReviewedUser] = useRecoilState(isReviewed);

  const handleDelete = (e) => {
    console.log(review);
    e.preventDefault();
    axios.delete(`http://localhost:3001/review/${id}/${user._id}`).then(() => {
      setIsReviewedUser(false);
      setReview(review.filter((a) => a.user !== user._id));
      window.location.reload();
    });
  };

  return (
    <>
      {user ? (
        <div className="bg-secondary mx-5 my-5 d-flex flex-column mw-50 mw-md-50 p-3 gap-3 col-7 col-md-5 col-lg-3">
          {isReviewedUser ? (
            <>
              <div className="mx-auto w-100 border-bottom d-flex justify-content-center align-items-center pb-3">
                <button
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#updateReview"
                  data-bs-whatever="@mdo"
                  className="btn btn-dark"
                >
                  Edit your review
                </button>
              </div>
              <div className="mx-auto w-100 border-bottom d-flex justify-content-center align-items-center pb-3">
                <button
                  onClick={handleDelete}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete review
                </button>
              </div>
            </>
          ) : null}

          <div className="mx-auto w-100  d-flex justify-content-center align-items-center pb-3">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#addToList"
              data-bs-whatever="@mdo"
              className="btn btn-dark"
            >
              Add to lists
            </button>
          </div>
        </div>
      ) : null}

      <UpdateReviewForm />
      <AddToList list={myList} />
    </>
  );
}
