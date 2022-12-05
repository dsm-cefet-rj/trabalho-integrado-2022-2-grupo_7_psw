import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function List({ title, games, id }) {
  const [cover, setCover] = useState([]);
  useEffect(() => {
    games.forEach((element) => {
      fetch(`http://localhost:3001/api/cover/${element}`)
        .then((res) => res.json())
        .then((data) => {
          setCover(cover.concat(data.data[0].url));
        })
        .catch((error) => console.log(error));
    });
  }, []);
  console.log(cover);
  return (
    <div className="my-5 mx-3">
      <div className="d-flex gap-3 flex-column flex-md-row">
        <Link to={`/list/${id}`}>
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
            {/*     {cover.map((e) => {
              return <img alt="game" src={`https:${e}`} />;
            })} */}
          </div>
        </Link>

        <div className="mx-2">
          <h2 className="text-light fs-3">{title}</h2>

          <BsFillTrashFill color="lightgrey" size={30} />
          <Link to="/lists/edit">
            <AiFillEdit className="mx-2" color="lightgrey" size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}
