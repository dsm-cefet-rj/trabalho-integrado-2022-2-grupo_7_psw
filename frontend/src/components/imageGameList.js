import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ImageGameList({ id }) {
  const imgStyle = {
    width: 160,
    height: 240,
  };

  const [cover, setCover] = useState(
    "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png"
  );

  useEffect(() => {
    fetch(`http://localhost:3001/api/cover/${id}`)
      .then((res) =>
        res.json().then((data) => {
          setCover(
            "https:" + data.data[0].url.replace("t_thumb", "t_cover_big")
          );
        })
      )
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <Link to={`/screen/${id}`}>
      <img
        style={imgStyle}
        src={cover}
        className="hover-effect m-0 m-md-2 rounded shadowEffect"
      />
    </Link>
  );
}

export default ImageGameList;
