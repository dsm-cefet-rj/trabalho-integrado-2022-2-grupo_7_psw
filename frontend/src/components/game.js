import { Link } from "react-router-dom";

function games({ gameImage }) {
  const imgStyle = {
    width: 192,
    height: 288,
  };

  return (
    <div className="d-flex col-12 my-5 flex-column-reverse align-items-center flex-md-row game">
      <Link
        className="position-relative inline-block mx-md-1"
        to={`/screen/whatever`}
      >
        <img
          style={imgStyle}
          src= { gameImage }
          className="img-fluid hover-effect"
          alt="..."
        />
      </Link>
    </div>
  );
}

export default games;
