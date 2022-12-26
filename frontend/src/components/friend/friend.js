import { Link } from "react-router-dom";
import image from "../../images/userpicture.png";
import "./friend.css"

import { useEffect } from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { authAtom, userAtom } from "../../recoil/atoms/userState";
import { useUpdateUser, useAddUserFriends as useAddUserFriends, useRemoveUserFriends } from "../../recoil/hooks/userHooks/useCRUDUser";

function Friend({ username, id, url, following }) {
  const [follow, setFolow] = useState(following);
  const [change, setChange] = useState(true);
  const [buttonClass, setButtonClass] = useState("primary-style-button");
  const [buttonMessage, setButtonMessage] = useState("Follow");
  
  const loggedUser = useRecoilValue(userAtom)
  const auth = useRecoilValue(authAtom)  

  useEffect(() => {
    if (follow) {
      setChange(false);
      setButtonClass("secondary-style-button");
      setButtonMessage("Followed");
    }

    if (!follow) {
      setButtonClass("primary-style-button");
      setButtonMessage("Follow");
      setChange(true);
    }
  }, [follow]);

  const HandleAdd = () => {
    setFolow(true)
    useAddUserFriends(loggedUser._id, username, url, auth)
  }
  const HandleRemove = () => {
    setFolow(false)
    useRemoveUserFriends(loggedUser._id, username, auth)
  }


  const imgStyle = {
    width: 50,
    height: 50,
  };

  return (
    <>
      <div>
        <div className="col-11 d-flex flex-column ">
          <div className="friend-container">

            <Link className="position-relative link-container gap-3" to={`/dropprUser/${username}`}>
              <img
                alt="profile"
                className="rounded-circle img-fluid"
                style={imgStyle}
                src={url || image}
              />
              <h4 className="fs-5 fs-md-4">{username}</h4>
            </Link>
            {loggedUser ? (
              following ? (
                <button
                  type="button"
                  className={buttonClass + " ms-auto btn-sm"}
                  onClick={HandleRemove}
                >
                  {buttonMessage}
                </button>
              ) : (
                <button
                  type="button"
                  className={buttonClass + " ms-auto btn-sm"}
                  onClick={HandleAdd}
                >
                  {buttonMessage}
                </button>

              )


            ) : (
              null
            )
            }
          </div>
        </div>
        <div className="col-11 mx-auto border-bottom border-secondary d-flex gap-4 "></div>
      </div>
    </>
  );
}

export default Friend;
