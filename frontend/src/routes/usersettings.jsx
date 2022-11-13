import Header from "../components/header";
import image from "../images/userpicture.png";

import "./usersettings.css";

export default function Screen() {
  return (
    <>
      <Header />
      <div id="settings-area">
        <div className="container">
          <div className="mt-5 mx-3">
            <h2 className="text-light">Edit your profile:</h2>
            <form action="">
              <div class="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Change username"
                ></input>
              </div>
              <br></br>
              <div class="form-group">
                <label>Bio:</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Change bio"
                ></input>
              </div>
              <br></br>
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
