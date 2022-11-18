import { BsDropletFill } from "react-icons/bs";

export default function review({
  stars,
  title,
  cover,
  release,
  text,
  checkout,
  date,
  game_id,
  favorited,
}) {
  const arr = [];
  for (let i = 0; i < stars; i++) {
    arr.push("star");
  }
  return (
    <div className="d-flex flex-column gap-2 mx-3 mx-md-5 my-5">
      <div className="d-flex gap-3">
        <img
          alt="review"
          src="https://images.igdb.com/igdb/image/upload/t_cover_small/nocover.png"
        />
        <div className="d-flex flex-column">
          <div className="d-flex gap-3">
            <h2>{title}</h2>
            <h3 className="text-secondary">{release}</h3>
          </div>
          <div className="d-flex gap-2">
            <div>
              {arr.map(() => {
                return <BsDropletFill color="deepskyblue" />;
              })}
            </div>

            <p className="text-secondary d-none d-md-inline">Uploaded {date}</p>
          </div>
          <p className="text-secondary d-md-none">Uploaded 22 may 2020</p>
          <p className="text-light d-none d-md-inline">{text}</p>
        </div>
      </div>
      <p className="d-inline d-md-none text-light">{text}</p>
    </div>
  );
}
