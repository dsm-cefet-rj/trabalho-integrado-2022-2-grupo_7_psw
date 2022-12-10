import "./singinComponent.css";

const SinginComponent = () => {
    return (
        <>        
        <div className="login-container">
          <div className="mt-5 mx-3 form-container">
            <h2 className="text-light">Sign In:</h2>
            <form action="">
              <div class="form-group mt-3">
                <label>Username:</label>
                <input
                  type="text"
                  class="form-control mt-1"
                  placeholder="Username"
                ></input>
              </div>
              <div class="form-group mt-4">
                <label>Password:</label>
                <input
                  type="password"
                  class="form-control mt-1"
                  placeholder="********"
                ></input>
              </div>
              <div className="button-container">
                <button type="submit" class="btn btn-primary mt-4">
                    Sign In
                </button>
              </div>
            </form>
          </div>
        </div>

      </>
    )
}

export default SinginComponent