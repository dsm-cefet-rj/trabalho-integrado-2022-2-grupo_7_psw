import { reviewState } from "../recoil/atoms/review";
import { useRecoilState } from "recoil";

const createReview = () => {
  const [reviewList, setReviewList] = useRecoilState(reviewState);
  setReviewList((oldReviewList) => [
    ...reviewList,
    {
      numOfstars: rating,
      text_review: text,
      game_id: 1,
      date: "12/02/2003",
      checkOut: "false",
      coverReview: { myCover },
      titleReview: "Title",
      yearRelease: 2003,
      isFavorite: false,
    },
  ]);
  setRating(null);
  setText("");
};

export default createReview;
