import "./userSettingsComponent.css"

import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { pictureForm } from "../../recoil/atoms/pictureForm";
import { authAtom, userAtom, userPictureState } from "../../recoil/atoms/userState";
import { useState } from "react";
import { useUpdateUser } from "../../recoil/hooks/userHooks/useCRUDUser";

const UserSettingsComponent = () => {

  const loggedUser = useRecoilValue(userAtom)
  const currentAuth = useRecoilValue(authAtom)

  const [currentUrl, setCurrentUrl] = useRecoilState(userPictureState)
  const [currentUsername, setCurrentUsername] = useState(loggedUser.username)
  const [currentBio, setCurrentBio] = useState(loggedUser.bio)

  const [currentCustonPicture, setCurrentCurton] = useState(true)
  const [currentFrase, setCurrentFrase] = useState("Use character generator!")


  const HandleSwitch = () => {
    setCurrentCurton(!currentCustonPicture)
    if (currentFrase === "Use character generator!") {
      setCurrentFrase("Send your own URL picture!")
    } else {
      setCurrentFrase("Use character generator!")
    }
  }

  const HandleClickOnUpdate = () => {
    useUpdateUser(loggedUser._id, currentUsername, currentUrl, currentBio, currentAuth);
  }

  const HandleClickOnDelete = () => {
    console.log("deletado!!!")
  }


  const avatarDimension = {
    width: "200px",
    height: "200px",
  };
  return (
    <div id="settings-area">
      <div className="edit-container">
        <div className="mt-5 mx-3">
          <h2 className="text-light mt-5">Edit your profile:</h2>
          <div className="form-container">
            <div className="form-group">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Change username"
                value={currentUsername}
                onChange={ev => setCurrentUsername(ev.target.value)}
              ></input>
            </div>
            <br></br>
            <div className="form-group">
              <label>Bio:</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Change bio"
                value={currentBio}
                onChange={ev => setCurrentBio(ev.target.value)}
              ></textarea>
            </div>
            <div id="profile_picture_area" className="image-container">
              <div>
                <button className="switch-button" onClick={HandleSwitch}>
                  {currentFrase}
                </button>
              </div>
              {currentCustonPicture ? (
                <>
                  <img
                    alt="profile"
                    className="rounded-circle"
                    style={avatarDimension}
                    src={
                      currentUrl
                    }
                  />
                  <input
                    type="text"
                    placeholder="URL image"
                    className="form-control"
                    value={currentUrl}
                    onChange={ev => setCurrentUrl(ev.target.value)}
                  ></input>
                </>
              ) : (
                <>
                  <img
                    alt="profile"
                    className="rounded-circle"
                    style={avatarDimension}
                    src={
                      currentUrl
                    }
                  />
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#updatePicture"
                    data-bs-whatever="@mdo"
                    className="switch-button"
                  >
                    Change it
                  </button>
                </>

              )
              }
            </div>
          </div>

          <div className="button-container mt-2">
            <button className="btn btn-primary" type="submit" onClick={HandleClickOnUpdate}>
              Submit
            </button>
            <p>
              <span className="opacity-50"></span>
              <a className="warning-link" style={{cursor: "pointer"}} onClick={HandleClickOnDelete}>Delete account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSettingsComponent;