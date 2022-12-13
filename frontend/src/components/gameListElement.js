import { useState, useEffect } from "react";

export default function GameListElement({ game_id }) {
  const [cover, setCover] = useState(
    "https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
  );

  const [title, setTitle] = useState(
    "Loading..."
  );

  console.log(cover);
  useEffect(() => {
    fetch(`http://localhost:3001/api/cover/${game_id}`)
      .then((res) => res.json())
      .then((data) => {
        setCover(data.data[0].url.replace("t_thumb", "t_cover_small"));
      })
      .catch((error) => console.log(error));
    
    fetch(`http://localhost:3001/api/general/${game_id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.data[0].name);
        })
        .catch((error) => console.log(error));
    }, [game_id]);

  return  (
    <>
      <img src={cover} />
      <h3>{title}</h3>
    </>
  );
  /* return <h1>{game_id}</h1>; */
}
