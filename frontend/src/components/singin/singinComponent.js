import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom } from "../../recoil/atoms/userState";
// import { authAtom } from "../../recoil/atoms/authAtom";
// import { useParams } from "react-router-dom";
// import {
//   useGetAllUsers,
//   useGetUserByEmail,
//   useGetUserById,
// } from "../../recoil/hooks/userHooks/useCRUDUser";
// import { useGetUserEmail } from "../../recoil/hooks/userHooks/useGetUserElements";
import "./singinComponent.css";

const SinginComponent = () => {

  let [currentPassword, setCurrentPassword] = useState();
  let [currentUserName, setCurrentUserName] = useState();

  let setAuth = useSetRecoilState(authAtom)
  let currentAuth = useRecoilValue(authAtom)

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

    fetch("http://localhost:3001/login", requestOptions)
    .then(response => response.json())
    .then(data => {
      // localStorage.setItem('token', data.token)
      setAuth(data.token)
      
    })
    
  };
  console.log(currentAuth)

  return (
    <>
      <div className="login-container">
        <div className="mt-5 mx-3">
          <h2 className="text-light">Sign In</h2>
          <form className="form-container" action="/">
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
          </form>
        </div>
      </div>
    </>
  );
};

export default SinginComponent;
