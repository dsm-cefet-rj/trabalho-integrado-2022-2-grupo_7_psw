import { Link } from "react-router-dom";

function games({ gameImage }) {
  const imgStyle = {
    width: 180,
    height: 240,
  };

  return (
    <div className="d-flex col-12 my-5 flex-column-reverse align-items-center flex-md-row">
      <Link
        className="position-relative inline-block mx-md-4"
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
