import { Link } from "react-router-dom";
import image from "../images/userpicture.png";

import { useEffect } from "react";
import { useState } from "react";

function Friend({ username, url }) {
  const [follow, setFolow] = useState(false);
  const [change, setChange] = useState(true);
  const [buttonClass, setButtonClass] = useState("btn btn-primary");
  const [buttonMessage, setButtonMessage] = useState("Follow");

  useEffect(() => {
    if (follow) {
      console.log("entrei");
      setChange(false);
      setButtonClass("btn btn-secondary");
      setButtonMessage("Followed");
    }

    if (!follow) {
      setButtonClass("btn btn-primary");
      setButtonMessage("Follow");
      setChange(true);
    }
  }, [follow]);

  const imgStyle = {
    width: 50,
    height: 50,
  };

  return (
    <>
      <div>
        <div className="col-11 d-flex flex-column m-3">
          <div className="d-flex align-items-center gap-3">
            <Link className="position-relative" to="/dropprUser">
              <img
                alt="profile"
                className="rounded-circle img-fluid"
                style={imgStyle}
                src={url || image}
              />
            </Link>
            <h4 className="fs-5 fs-md-4">{username}</h4>
            <button
              type="button"
              className={buttonClass + " ms-auto btn-sm"}
              onClick={() => setFolow(change)}
            >
              {buttonMessage}
            </button>
          </div>
        </div>
        <div className="col-11 mx-auto border-bottom border-secondary d-flex gap-4 my-3"></div>
      </div>
    </>
  );
}

export default Friend;
