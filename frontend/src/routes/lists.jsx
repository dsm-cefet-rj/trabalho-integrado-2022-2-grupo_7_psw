import Header from "../components/header";
import List from "../components/list";
import NoLists from "../components/noLists";
import { gameListState } from "../recoil/atoms/gameList";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";

export default function Lists() {
  const lists = useRecoilValue(gameListState);
  return (
    <>
      <Header />
      <div className="mx-3 mx-md-5">
        {lists.length > 0 ? (
          <Link to="/lists/new">
            <button type="button" class="btn btn-success p-2 fs-6 mt-5 mx-3">
              Create new list
            </button>
          </Link>
        ) : null}
        {lists.length > 0 ? (
          lists.map((e) => {
            return <List listName={e.listName} />;
          })
        ) : (
          <NoLists />
        )}
      </div>
    </>
  );
}
