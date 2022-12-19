import "./userSettingsComponent.css"

import { useRecoilValue } from "recoil";
import { pictureForm } from "../../recoil/atoms/pictureForm";

const UserSettingsComponent = () => {
    const avatarDimension = {
        width: 200,
        height: 200,
      };
    
      const profilePicture = useRecoilValue(pictureForm); //vai vim do user depois.
    
    return (
        <div id="settings-area">
        <div className="edit-container">
          <div className="mt-5 mx-3">
            <h2 className="text-light mt-5">Edit your profile:</h2>
            <form className="form-container" action="">
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Change username"
                ></input>
              </div>
              <br></br>
              <div className="form-group">
                <label>Bio:</label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Change bio"
                ></textarea>
              </div>
              <div className="d-flex flex-column align-items-start">
                <div className="my-4 d-flex flex-column justify-content-center">
                  <h5 className="d-inline-block">Your profile picture:</h5>
                  <img
                    alt="profile"
                    className="rounded-circle"
                    style={avatarDimension}
                    src={
                      profilePicture ||
                      "https://avatars.dicebear.com/api/female/john.svg?background=%2314181c"
                    }
                  />
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#updatePicture"
                    data-bs-whatever="@mdo"
                    className="mb-1"
                  >
                    Change it
                  </button>
                </div>
              </div>

              <br></br>
            </form>
            <div className="button-container mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default UserSettingsComponent;