import { BsFillTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { gameListState } from "../recoil/atoms/gameList";
import { RecoilLoadable, useRecoilState } from "recoil";

export default function List({ title, games, id }) {
  const [cover, setCover] = useState([]);
  const [list, setList] = useRecoilState(gameListState);

  useEffect(() => {
    games.forEach((element) => {
      fetch(`http://localhost:3001/api/cover/${element}`)
        .then((res) => res.json())
        .then((data) => {
          setCover((cover) => cover.concat(data.data));
        })
        .catch((error) => console.log(error));
    });
  }, []);

  const imgSize = {
    width: 270,
    height: 120,
  };

  const handleDelete = () => {
    axios.delete(`http://localhost:3001/list/${id}`).then(() => {
      setList(list.filter((a) => a._id !== id));
    });
  };

  return (
    <div className="my-5 mx-3">
      <div className="d-flex gap-3 flex-column flex-md-row">
        <Link to={`/list/${id}`}>
          <div className="d-inline-block border">
            {cover.length > 0 ? (
              cover.slice(-3).map((e) => {
                return <img alt="game" src={`https:${e.url}`} />;
              })
            ) : (
              <img
                style={imgSize}
                alt="game"
                src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
              />
            )}
          </div>
        </Link>

        <div className="mx-2">
          <h2 className="text-light fs-3">{title}</h2>

          <Link>
            <BsFillTrashFill
              onClick={handleDelete}
              color="lightgrey"
              size={30}
            />
          </Link>

          <Link to={`/lists/edit/${id}`}>
            <AiFillEdit className="mx-2" color="lightgrey" size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}
