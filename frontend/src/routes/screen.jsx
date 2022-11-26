import Header from "../components/header";
import ScreenL from "../components/screenLucas";
import Review from "../components/review";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReviewConfig from "../components/reviewconfig";

import "./screen.css";

export default function Screen() {
  const [cover, setCover] = useState([]);
  const [title, setTitle] = useState([]);
  const [creator, setCreator] = useState([]);
  const [date, setDate] = useState([]);
  const [description, setDescription] = useState("");
  const [screenshot, setScreenshot] = useState("");
  const [ratingAvg, setRatingAvg] = useState(0);
  const [userReview, setUserReview] = useState([]);

  const id = useParams().id;
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
  }, [id]);
  return (
    <>
      <Header />
      <ScreenL
        myCover={`https:${cover}`}
        myDate={date}
        myCreator={creator}
        myTitle={title}
        myDescription={description}
        myScreenshot={`https:${screenshot}`}
        myRatingAvg={ratingAvg}
        isReviewed={userReview.length > 0 ? true : false}
      />
      <hr></hr>
      {userReview.length > 0
        ? userReview.map((e) => {
            return (
              <Review
                text={e.text_review}
                game_id={e.game_id}
                date={e.date}
                stars={e.rating}
              />
            );
          })
        : null}
      <ReviewConfig isReviewed={userReview.length > 0 ? true : false} />
    </>
  );
}
