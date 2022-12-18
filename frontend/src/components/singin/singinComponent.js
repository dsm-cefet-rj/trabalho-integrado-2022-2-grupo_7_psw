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
  let currentAuth = useRecoilValue(authAtom)
  
  let setUser = useSetRecoilState(userAtom)
  let currentUser = useRecoilValue(userAtom)

  
  if(currentAuth){
    var userId = jwtDecode(currentAuth)._id;
  }
  
  let loggedUser = useGetUserById(userId)
  
  setUser(loggedUser)

  const customHeaders = {
    "Content-Type": "application/json",
  };

  const HandleLoginClick = () => {
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
      setAuth(data.token)
    })    
  };
  return (
    <>
      <div className="login-container">
        <div className="mt-5 mx-3">
          <h2 className="text-light">Sign In</h2>
          <div className="form-container">
            <div class="form-group mt-3">
              <label>Email</label>
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
            <div className="button-container">
              <button class="btn btn-primary mt-4" onClick={HandleLoginClick}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinginComponent;
