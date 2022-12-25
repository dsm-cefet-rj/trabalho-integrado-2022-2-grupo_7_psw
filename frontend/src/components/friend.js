import { Link } from "react-router-dom";
import image from "../images/userpicture.png";

import { useEffect } from "react";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { authAtom, userAtom } from "../recoil/atoms/userState";
import { useUpdateUser, useAddUserFriends as useAddUserFriends, useRemoveUserFriends } from "../recoil/hooks/userHooks/useCRUDUser";

function FollowButton({ username, id, url, following }) {
  const [follow, setFolow] = useState(following);
  const [change, setChange] = useState(true);
  const [buttonClass, setButtonClass] = useState("primary-style-button");
  const [buttonMessage, setButtonMessage] = useState("Follow");
  
  const loggedUser = useRecoilValue(userAtom)
  const auth = useRecoilValue(authAtom)
  
  
  

  console.log(following)
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
        <div className="col-11 d-flex flex-column m-3">
          <div className="d-flex align-items-center gap-3">
            <Link className="position-relative" to={`/dropprUser/${username}`}>
              <img
                alt="profile"
                className="rounded-circle img-fluid"
                style={imgStyle}
                src={url || image}
              />
            </Link>
            <h4 className="fs-5 fs-md-4">{username}</h4>
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
        <div className="col-11 mx-auto border-bottom border-secondary d-flex gap-4 my-3"></div>
      </div>
    </>
  );
}

export default FollowButton;
