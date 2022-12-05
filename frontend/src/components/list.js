import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function list({ listName }) {
  return (
    <div className="my-5 mx-3">
      <div className="d-flex gap-3 flex-column flex-md-row">
        <Link to="/list">
          <div className="d-flex">
            <img
              alt="game"
              src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
            />
            <img
              alt="game"
              src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
            />
            <img
              alt="game"
              src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
            />
          </div>
        </Link>

        <div className="mx-2">
          <h2 className="text-light fs-3">{listName}</h2>

          <BsFillTrashFill color="lightgrey" size={30} />
          <Link to="/lists/edit">
            <AiFillEdit className="mx-2" color="lightgrey" size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}
