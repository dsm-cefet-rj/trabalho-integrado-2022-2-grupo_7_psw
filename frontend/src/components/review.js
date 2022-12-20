import { BsDropletFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import image from "../images/userpicture.png";

export default function Review({
  stars,
  title,
  cover,
  release,
  text,
  checkout,
  date,
  game_id,
  favorited,
  username,
  user_id,
  profilePicture,
}) {
  const arr = [];
  for (let i = 0; i < stars; i++) {
    arr.push("star");
  }

  const heightImage = {
    height: 128,
    width: 90,
  };

  const [coverReview, setCoverReview] = useState(
    "https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
  );
  const [titleReview, setTitleReview] = useState("Title");
  const [yearRelease, setYearRelease] = useState("Unknown");
  const [userInfo, setUserInfo] = useState("Unknown");

  const imgStyle = {
    width: 30,
    height: 30,
  };

  useEffect(() => {
    fetch(`http://localhost:3001/api/cover/${game_id}`)
      .then((res) => res.json())
      .then((data) =>
        setCoverReview(
          "https:" + data.data[0].url.replace("t_thumb", "t_cover_small")
        )
      )
      .catch((error) => console.log(error));
    fetch(`http://localhost:3001/api/date/${game_id}`)
      .then((res) => res.json())
      .then((data) => setYearRelease(data.data[0].y))
      .catch((error) => console.log(error));

    fetch(`http://localhost:3001/api/general/${game_id}`)
      .then((res) => res.json())
      .then((data) => setTitleReview(data.data[0].name))
      .catch((error) => console.log(error));

    fetch(`http://localhost:3001/user/${user_id}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data.data))
      .catch((error) => console.log(error));
  }, [game_id]);

  console.log(user_id);

  return (
    <div className="d-flex flex-column gap-2 mx-3 mx-md-5 my-5">
      <div className="d-flex gap-3">
        <img style={heightImage} alt="review" src={coverReview} />
        <div className="d-flex flex-column">
            <div className="d-flex align-items-center gap-3 mb-1">
              <img
                alt="profile"
                className="rounded-circle img-fluid d-flex"
                style={imgStyle}
                src={profilePicture || image}
              />
              <h5 className="mb-0">{username}</h5>
            </div>
          <div className="d-flex gap-3">
            <h2>{titleReview}</h2>
            <h3 className="text-secondary">{yearRelease}</h3>
          </div>
          <div className="d-flex gap-2">
            <div>
              {arr.map(() => {
                return <BsDropletFill color="deepskyblue" />;
              })}
            </div>

            <p className="text-secondary d-none d-md-inline">Uploaded {date}</p>
          </div>
          <p className="text-secondary d-md-none">Uploaded 22 may 2020</p>
          <p className="text-light d-none d-md-inline">{text}</p>
        </div>
      </div>
      <p className="d-inline d-md-none text-light">{text}</p>
    </div>
  );
}
