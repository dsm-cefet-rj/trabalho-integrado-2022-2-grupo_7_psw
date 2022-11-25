import Header from "../components/header";

export default function Screen() {
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
              <label for="formFileDisabled" class="form-label mt-3">
                Select a profile picture:
              </label>
              <input class="form-control" type="file" />
              <br></br>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
