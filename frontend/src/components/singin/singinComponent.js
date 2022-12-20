import "./singinComponent.css";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom, userAtom } from "../../recoil/atoms/userState";
import { useGetUserById } from "../../recoil/hooks/userHooks/useCRUDUser";
import jwtDecode from "jwt-decode";

const SinginComponent = () => {

  let [currentPassword, setCurrentPassword] = useState();
  let [currentUserName, setCurrentUserName] = useState();

  let setAuth = useSetRecoilState(authAtom)

  let setUser = useSetRecoilState(userAtom)

  const HandleLoginClick = () => {
    const customHeaders = {
      "Content-Type": "application/json",
    };
    const requestOptions = {
      method: "POST",
      headers: customHeaders,
      body: JSON.stringify({
        username: currentUserName,
        password: currentPassword
      }),
    }
    // let decodeToken = "not decoded yet";

    fetch("http://localhost:3001/login", requestOptions)
      .then(response => response.json())
      .then(data => {
        setAuth(data.token);
        setUser(jwtDecode(data.token));
      })

    setTimeout(() => {
        window.location.href = "http://localhost:3000"
    }, 300);
  };
  return (
    <>
      <div className="login-container">
        <h2 className="text-light mt-5 mx-3 ">Sign In</h2>
        <div className="form-container">
          <form className="">
            <div class="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                class="form-control mt-1"
                placeholder="Username"
                required="true"
                value={currentUserName}
                onChange={(ev) => setCurrentUserName(ev.target.value)}
              ></input>
            </div>
            <div class="form-group mt-4">
              <label>Password</label>
              <input
                type="password"
                class="form-control mt-1"
                placeholder="********"
                value={currentPassword}
                onChange={(ev) => setCurrentPassword(ev.target.value)}
              ></input>
            </div>
          </form>
          <p className="mt-2"><span className="opacity-50">Don't have an account yet? Sign up </span><a className="linkar"href="http://localhost:3000/register">here!</a></p>
          <div className="button-container">
            <button class="btn btn-primary mt-1" type="submit" onClick={HandleLoginClick}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinginComponent;
