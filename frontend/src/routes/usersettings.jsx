import Header from "../components/header";
import UpdatePicture from "../components/updateProfilePicture";
import { pictureForm } from "../recoil/atoms/pictureForm";
import { useRecoilValue } from "recoil";

export default function Screen() {
  const avatarDimension = {
    width: 200,
    height: 200,
  };

  const profilePicture = useRecoilValue(pictureForm);

  return (
    <>
      <Header />
      <div id="settings-area">
        <div className="container">
          <div className="mt-5 mx-3">
            <h2 className="text-light">Edit your profile:</h2>
            <form action="">
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
                <input
                  type="text"
                  className="form-control"
                  placeholder="Change bio"
                ></input>
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
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <UpdatePicture />
    </>
  );
}
