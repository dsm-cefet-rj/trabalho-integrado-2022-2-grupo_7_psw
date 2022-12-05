import Header from "../components/header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SelectionState } from "draft-js";
export default function IndividualList() {
  const imgSize = {
    width: 50,
    height: 50,
  };
  const id = useParams().id;
  const [mylist, setList] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/getsinglelist/${id}`)
      .then((res) => res.json())
      .then((data) => setList(data.data))
      .catch((error) => console.log(error));
  }, []);

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
            <img
              alt="game"
              src="https://images.igdb.com/igdb/image/upload/t_cover_small/co1u9s.jpg"
            />
            <img
              alt="game"
              src="https://images.igdb.com/igdb/image/upload/t_cover_small/co1u9s.jpg"
            />
            <img
              alt="game"
              src="https://images.igdb.com/igdb/image/upload/t_cover_small/co1u9s.jpg"
            />
            <img
              alt="game"
              src="https://images.igdb.com/igdb/image/upload/t_cover_small/co1u9s.jpg"
            />
            <img
              alt="game"
              src="https://images.igdb.com/igdb/image/upload/t_cover_small/co1u9s.jpg"
            />
            <img
              alt="game"
              src="https://images.igdb.com/igdb/image/upload/t_cover_small/co1u9s.jpg"
            />
            <img
              alt="game"
              src="https://images.igdb.com/igdb/image/upload/t_cover_small/co1u9s.jpg"
            />
            <img
              alt="game"
              src="https://images.igdb.com/igdb/image/upload/t_cover_small/co1u9s.jpg"
            />
            <img
              alt="game"
              src="https://images.igdb.com/igdb/image/upload/t_cover_small/co1u9s.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
