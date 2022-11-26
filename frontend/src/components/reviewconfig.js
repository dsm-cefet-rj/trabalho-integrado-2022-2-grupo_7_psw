import {
  BsHeart,
  BsCartDash,
  BsBookmark,
  BsBookmarkCheck,
} from "react-icons/bs";

export default function ReviewConfig({ isReviewed }) {
  return (
    <div className="bg-secondary mx-5 my-5 d-flex flex-column mw-50 mw-md-50 p-3 gap-3 col-7 col-md-5 col-lg-3">
      <div className="d-flex justify-content-around border-bottom flex-column flex-md-row">
        <div className="d-flex flex-column align-items-center">
          <BsHeart size={30} />
          <p>Like</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          {isReviewed ? (
            <BsBookmarkCheck size={30} />
          ) : (
            <BsBookmark size={30} />
          )}
          <p>{isReviewed ? "Reviewed" : "Review"}</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <BsCartDash size={30} />
          <p>Wish</p>
        </div>
      </div>

      {isReviewed ? (
        <div className="mx-auto w-100 border-bottom d-flex justify-content-center align-items-center pb-3">
          <button type="button" className="btn btn-dark">
            Edit your review
          </button>
        </div>
      ) : null}
      <div className="mx-auto w-100  d-flex justify-content-center align-items-center pb-3">
        <button
          type="button"
          className="btn btn-dark"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          Add to lists
        </button>
      </div>
    </div>
  );
}
