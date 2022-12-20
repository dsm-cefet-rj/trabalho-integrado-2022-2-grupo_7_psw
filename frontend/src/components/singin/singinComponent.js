import "./singinComponent.css";
import { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom, userAtom, userNameState } from "../../recoil/atoms/userState";
import { useGetUserById } from "../../recoil/hooks/userHooks/useCRUDUser";
import jwtDecode from "jwt-decode";
import { useLoginUser } from "../../recoil/hooks/userHooks/useLoginUser";
import {NotificationContainer} from 'react-notifications';

const SinginComponent = () => {

  let [currentPassword, setCurrentPassword] = useState();
  let [currentUserName, setCurrentUserName] = useRecoilState(userNameState);

  let setAuth = useSetRecoilState(authAtom)

  let setUser = useSetRecoilState(userAtom)

  const HandleLoginClick = () => {
   useLoginUser(currentUserName, currentPassword, setUser, setAuth)
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
                placeholder="Password"
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
      <NotificationContainer/>
    </>
  );
};

export default SinginComponent;
