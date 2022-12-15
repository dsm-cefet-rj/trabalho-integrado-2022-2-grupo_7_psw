import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetAllUsers,
  useGetUserByEmail,
  useGetUserById,
} from "../../recoil/hooks/userHooks/useCRUDUser";
import { useGetUserEmail } from "../../recoil/hooks/userHooks/useGetUserElements";
import "./singinComponent.css";

const SinginComponent = () => {

  let [currentPassword, setCurrentPassword] = useState();
  let [currentUserName, setCurrentUserName] = useState();

  const customHeaders = {
    "Content-Type": "application/json",
  };

  const HandleLoginClick = async (e) => {
    try {
      let res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify({
          username: currentUserName,
          password: currentPassword
        }),
      });

      if (res.status === 200) {
        alert(res.status);
      } else {
        alert(res.status);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="mt-5 mx-3">
          <h2 className="text-light">Sign In</h2>
          <form className="form-container">
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
