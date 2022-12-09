import Header from "../components/header";
import List from "../components/list";
import NoLists from "../components/noLists";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { gameListState } from "../recoil/atoms/gameList";
import { useRecoilState } from "recoil";

export default function Lists() {
  const [gameLists, setGameLists] = useState([]);
  const [list, setList] = useRecoilState(gameListState);

  useEffect(() => {
    fetch(`http://localhost:3001/getlist`)
      .then((res) => res.json())
      .then((data) => {
        setGameLists(data.data);
        setList(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <div className="mx-3 mx-md-5">
        {list.length > 0 ? (
          <Link to="/lists/new">
            <button type="button" class="btn btn-success p-2 fs-6 mt-5 mx-3">
              Create new list
            </button>
          </Link>
        ) : null}
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
