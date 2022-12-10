import Header from "../components/header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ImageGameList from "../components/imageGameList";
import { gameListState } from "../recoil/atoms/gameList";
import { useRecoilState } from "recoil";
export default function IndividualList() {
  const imgSize = {
    width: 50,
    height: 50,
  };
  const id = useParams().id;
  const [cover, setCover] = useState({ games: [] });
  const [mylist, setList] = useRecoilState(gameListState);

  useEffect(() => {
    fetch(`http://localhost:3001/getsinglelist/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCover(data.data);
        setList(data.data);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="col-12">
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
          <div className="mx-1 mx-md-5">
            <h3 className="text-light">{mylist ? mylist.title : "Title"}</h3>
            <p className="text-light my-4 opacity-50">
              {mylist ? mylist.description : "Description"}
            </p>
            <div className="d-flex flex-wrap gap-3 my-5">
              {cover.games.length > 0 ? (
                cover.games.map((e) => {
                  return <ImageGameList id={e} />;
                })
              ) : (
                <h3 className="text-light">
                  No games added to your list yet...
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
