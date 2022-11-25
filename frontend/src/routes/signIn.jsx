import Header from "../components/header";
function signIn() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="mt-5 mx-3">
          <h2 className="text-light">Sign In:</h2>
          <form action="">
            <div class="form-group">
              <label>Username:</label>
              <input
                type="text"
                class="form-control"
                placeholder="Username"
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
            <button type="submit" class="btn btn-primary">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default signIn;
