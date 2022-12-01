import React, { useState, useEffect } from "react";

function SmallGame({ background_image }) {
  const imgStyle = {
    width: 60,
    height: 60,
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

  return <img style={imgStyle} src={cover} />;
}

export default SmallGame;
