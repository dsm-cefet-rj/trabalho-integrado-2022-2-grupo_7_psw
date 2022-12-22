import Header from "../components/header";
import List from "../components/list";
import NoLists from "../components/noLists";
import { Link } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { gameListState } from "../recoil/atoms/gameList";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./lists.css"

export default function Lists() {
  const [list, setList] = useRecoilState(gameListState);
  const [cover, setCover] = useState([]);

  const fontStyle = {
    fontSize: 25,
    margin: 7
   
  };

  useEffect(() => {
    fetch(`http://localhost:3001/getlist`)
      .then((res) => res.json())
      .then((data) => {
        setList(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(cover);
  return (
    <>
      <Suspense fallback={<h2>loading...</h2>}>
        <Header />
      </Suspense>
      <div className="mx-3 mx-md-5">
        <div className="d-flex justify-content-center">
          {list.length > 0 ? (
            <Link className="mt-5" to="/lists/new">
              <button type="button" className="purple-style-button mt-5 text-flex" >
                <AiOutlinePlus size={30}/>
                <span style={fontStyle}>Create new list </span>
              </button>
            </Link>
          ) : null}
        </div>
        {list.length > 0 ? (
          list.map((e) => {
            return <List id={e._id} games={e.games} title={e.title} />;
          })
        ) : (
          <NoLists />
        )}
      </div>
    </>
  );
}
