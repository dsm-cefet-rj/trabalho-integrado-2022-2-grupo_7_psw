import {
  BsHeart,
  BsCartDash,
  BsBookmark,
  BsBookmarkCheck,
} from "react-icons/bs";
import "./reviewconfig.css";
import UpdateReviewForm from "../updateReviewForm";
import AddToList from "../addToListForm";
import { reviewState } from "../../recoil/atoms/review";
import { useRecoilState, useRecoilValue } from "recoil";
import { redirect, useParams } from "react-router-dom";
import axios from "axios";
import { userAtom } from "../../recoil/atoms/userState";
import { isReviewed } from "../../recoil/atoms/isReviewed";

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
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
  };

  return (
    <>
      {user ? (
        <div className="options-container">
          {isReviewedUser ? (
            <>
              <div className="options-container2">
                <button
                  style={{fontSize: "20px"}}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#updateReview"
                  data-bs-whatever="@mdo"
                  className="light-style-button"
                >
                  Edit your review
                </button>              
                <button
                  style={{fontSize: "20px"}}
                  onClick={handleDelete}
                  type="button"
                  className="warning-style-button"
                >
                  Delete review
                </button>
              </div>
            </>
          ) : null}
          <div className="mx-5">
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#addToList"
              data-bs-whatever="@mdo"
              className="purple-style-button"
              style={{fontSize: "20px"}}
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
