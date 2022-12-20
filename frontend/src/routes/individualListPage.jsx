import Header from "../components/header";
import { useParams } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import ImageGameList from "../components/imageGameList";
import { gameListState } from "../recoil/atoms/gameList";
import { useRecoilState, useRecoilValue } from "recoil";
import { userPictureState, userAtom } from "../recoil/atoms/userState";
export default function IndividualList() {
  const imgSize = {
    width: 50,
    height: 50,
  };
  const id = useParams().id;
  const [cover, setCover] = useState({ games: [] });
  const [mylist, setList] = useRecoilState(gameListState);

  const currentPicture = useRecoilValue(userPictureState);
  const user = useRecoilValue(userAtom);

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
      <Suspense fallback={<h2>loading...</h2>}>
        <Header />
      </Suspense>
      <div className="container">
        <div className="col-12">
          <div className="d-flex gap-2 align-items-center mx-4 mx-md-5 my-5">
            <img
              style={imgSize}
              alt="profile"
              className="rounded-circle"
              src={currentPicture}
            />
            <p className="text-light">
              List by <span className="fw-bold">{user.username}</span>{" "}
            </p>
          </div>
          <div className="mx-1 mx-md-5 pb-5">
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
