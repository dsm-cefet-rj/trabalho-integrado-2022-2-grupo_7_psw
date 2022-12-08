import Header from "../components/header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SelectionState } from "draft-js";
import { gameListState } from "../recoil/atoms/gameList";
import { useRecoilState } from "recoil";
import ImageGameList from "../components/imageGameList";
export default function IndividualList() {
  const imgSize = {
    width: 50,
    height: 50,
  };
  const id = useParams().id;
  const [mylist, setList] = useRecoilState(gameListState);
  const [cover, setCover] = useState([]);
  const [element, setElement] = useState("(11500, 11501, 11502)");

  useEffect(() => {
    fetch(`http://localhost:3001/getsinglelist/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data.data);
      });
  }, []);

  console.log(cover);

  /*   fetch(
    `http://localhost:3001/api/cover/${"(" + mylist.games.toString() + ")"}`
  )
    .then((res) => res.json())
    .then((data) => {
      setCover(data.data);
    })
    .catch((error) => console.log(error)); */

  return (
    <>
      <Header />
      <div className="col-12 col-md-6">
        <div className="d-flex gap-2 align-items-center mx-4 mx-md-5 my-5">
          <img
            style={imgSize}
            alt="profile"
            className="rounded-circle"
            src="https://avatars.dicebear.com/api/female/john.svg?background=%2314181c"
          />
          <p className="text-light">
            List by<span className="fw-bold"> Username</span>{" "}
          </p>
        </div>
        <div className="mx-4 mx-md-5">
          <h3 className="text-light">{mylist ? mylist.title : "Title"}</h3>
          <p className="text-light">
            {mylist ? mylist.description : "Description"}
          </p>
          <div className="d-flex flex-wrap gap-3 my-5">
            {mylist.games.map((e) => {
              return <ImageGameList id={e} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
