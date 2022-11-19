import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Games({
  background_image,
  myKey,
  title,
  category,
  genres,
  platforms,
}) {
  const imgStyle = {
    width: 135,
    height: 180,
  };

  const cardStyle = {
    backgroundColor: "#363945",
  };

  const [cover, setCover] = useState(
    "https://images.igdb.com/igdb/image/upload/t_cover_big/nocover.png"
  );

  useEffect(() => {
    fetch(`http://localhost:3001/api/capa/${background_image}`)
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
    <div
      style={cardStyle}
      className="d-flex pb-4 pb-md-0 col-8 my-5 flex-column-reverse justify-content flex-md-row position-relative rounded mx-auto mx-md-5"
    >
      <Link
        className=" inline-block me-md-4 mx-auto mx-md-0"
        to={`/screen/${myKey}`}
      >
        <img
          style={imgStyle}
          src={cover}
          className="img-fluid hover-effect rounded"
          alt="..."
        />
      </Link>
      <div className="mx-auto mx-md-0 d-flex d-md-block flex-column align-items-center">
        <h2 className="text-light mt-md-2 fs-3 fs-md-2 m-4 m-md-0">{title}</h2>

        <h5 className="p-1 bg-secondary rounded mt-3 d-inline-block fw-bold text-light fs-6 mb-4 text-center">
          Main Game
        </h5>
      </div>
    </div>
  );
}

export default Games;
