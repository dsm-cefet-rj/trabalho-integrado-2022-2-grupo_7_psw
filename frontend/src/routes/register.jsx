import Header from "../components/header";
import "./register.css"

function register() {
  return (
    <>
      <Header />
      <div className="register-container">
        <div className="mt-5 mx-3">
          <h5 className="text-light">New in Droppr?</h5>
          <h2 className="text-light">Register:</h2>
          <form className="form-container" action="" >
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control margin-bot"
                placeholder="Enter your username"
              ></input>
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                className="form-control margin-bot"
                placeholder="Enter your username"
              ></input>
            </div>
            
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control margin-bot"
                placeholder="********"
              ></input>
            </div>
            
            <div className="form-group">
              <label>Repeat your password:</label>
              <input
                type="password"
                className="form-control margin-bot"
                placeholder="********"
              ></input>
            </div>
            <div className="button-container">
              <button type="submit" class="btn btn-primary self-end">
                Register
              </button>              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default register;
