import Header from "../components/header";
import ScreenLucas from "../components/screenLucas";
import Review from "../components/review";
import React, { useState, useEffect, Suspense } from "react";
import { useParams } from "react-router-dom";
import ReviewConfig from "../components/reviewconfig/reviewconfig";
import { useRecoilState, useRecoilValue } from "recoil";
import { reviewState } from "../recoil/atoms/review";
import useGetreviewByGameAndUser from "../recoil/hooks/reviewHooks/getReviewByGameAndUser";
import { userAtom } from "../recoil/atoms/userState";
import { isReviewed } from "../recoil/atoms/isReviewed";


import "./screen.css";
import Footer from "../components/footer";

export default function Screen() {
  const [cover, setCover] = useState([]);
  const [title, setTitle] = useState([]);
  const [creator, setCreator] = useState([]);
  const [date, setDate] = useState([]);
  const [description, setDescription] = useState("");
  const [screenshot, setScreenshot] = useState("");
  const [ratingAvg, setRatingAvg] = useState(0);
  const [userReview, setUserReview] = useRecoilState(reviewState);
  const [list, setList] = useState([]);
  const id = useParams().id;

  const isReviewedUser = useRecoilValue(isReviewed);

  useEffect(() => {
    fetch(`http://localhost:3001/api/cover/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCover(data.data[0].url);
      })
      .catch((error) => console.log(error));

    fetch(`http://localhost:3001/api/general/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.data[0].name);
        setDescription(data.data[0].summary);
        setRatingAvg(Math.round(data.data[0].rating));
      })
      .catch((error) => console.log(error));

    fetch(`http://localhost:3001/api/creator/${id}`)
      .then((res) => res.json())
      .then((data) => setCreator(data.data[0].name))
      .catch((error) => console.log(error));

    fetch(`http://localhost:3001/api/date/${id}`)
      .then((res) => res.json())
      .then((data) => setDate(data.data[0].human))
      .catch((error) => console.log(error));

    fetch(`http://localhost:3001/api/screenshot/${id}`)
      .then((res) => res.json())
      .then((data) => setScreenshot(data.data[0].url))
      .catch((error) => console.log(error));
    fetch(`http://localhost:3001/getsinglereview/${id}`)
      .then((res) => res.json())
      .then((data) => setUserReview(data.data))
      .catch((error) => console.log(error));

    fetch(`http://localhost:3001/getlist`)
      .then((res) => res.json())
      .then((data) => {
        setList(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const reviewStyle = {
    height: 310,
    width: 1200,
  };

  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Header />
      </Suspense>
      <div className="display-container">
        <div className="display-item-container">
          <Suspense fallback={<h2>loading...</h2>}>
            <ScreenLucas
              myCover={`https:${cover}`}
              myDate={date}
              myCreator={creator}
              myTitle={title}
              myDescription={description}
              myScreenshot={`https:${screenshot}`}
              myRatingAvg={ratingAvg}
              gameId={id}
            />
          </Suspense>

        </div>
      

      <hr></hr>
      <div className="display-item2-container">
        <ReviewConfig
          myList={list}
          isReviewed={isReviewedUser ? true : false}
        />
        {userReview.length > 0
          ? userReview.map((e) => {
            return (
              <div className="d-flex justify-content-center justify-content-md-start">
                <Review
                  text={e.text_review}
                  game_id={e.game_id}
                  date={e.date}
                  stars={e.rating}
                  username={e.username}
                  user_id={e.user}
                  profilePicture={e.profilePicture}
                  key={e._id}
                />
              </div>
            );
          })
          : null}

      </div>
        </div>
        <Footer/>

    </>
  );
}
