import Header from "../components/header";

function register() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-5 mx-3">
          <h5 className="text-light">New in Droppr?</h5>
          <h2 className="text-light">Register:</h2>
          <form action="">
            <div class="form-group">
              <label>Username:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter your username"
              ></input>
            </div>
            <br></br>
            <div class="form-group">
              <label>Password:</label>
              <input
                type="password"
                class="form-control"
                placeholder="********"
              ></input>
            </div>
            <br></br>
            <div class="form-group">
              <label>Repeat your password:</label>
              <input
                type="password"
                class="form-control"
                placeholder="********"
              ></input>
            </div>
            <br></br>
            <button type="submit" class="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default register;
