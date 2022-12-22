import { useState } from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../recoil/atoms/userState";
import { useCreateUser } from "../../recoil/hooks/userHooks/useCRUDUser";
import {
  useGetPassword,
  useGetPassword2,
  useGetUserEmail,
  useGetUserLevel,
  useGetUserName,
} from "../../recoil/hooks/userHooks/useGetUserElements";
import {
  useSetUserEmail,
  useSetUserLevel,
  useSetUserName,
  useSetUserPassword,
  useSetUserPassword2,
} from "../../recoil/hooks/userHooks/useSetUserElements";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const RegisterComponent = () => {
  let loggeduser = useRecoilValue(userAtom);
  let authorized = false;

  let [currentLevel, setCurrentLevel] = useState("4");
  if (loggeduser) {
    if (loggeduser.level == 1) {
      authorized = true;
    }
  }

  let currentName = useGetUserName();
  let currentEmail = useGetUserEmail();
  let currentPassword = useGetPassword();
  let currentPassword2 = useGetPassword2();

  const setCurrentName = useSetUserName();
  const setCurrentEmail = useSetUserEmail();
  const setCurrentPassword = useSetUserPassword();
  const setCurrentPassword2 = useSetUserPassword2();

  const handleSubmit = (e) => {
    let validRegistration = true;

    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));

    if (!Object.fromEntries(data.entries()).Name.match(/^[a-zA-Z]+$/)) {
      console.log("Entrei");
      NotificationManager.error(
        "User must have only letters",
        "Username error",
        3000
      );
      validRegistration = false;
    }
    if (Object.fromEntries(data.entries()).Name.length>12) {
      console.log("Entrei");
      NotificationManager.error(
        "Your username must contain less than 12 letters",
        "Username error",
        3000
      );
      validRegistration = false;
    }
    console.log();
    if (
      Object.fromEntries(data.entries()).Email.indexOf("@") === -1 ||
      Object.fromEntries(data.entries()).Email.indexOf(".com") === -1
    ) {
      NotificationManager.error("Your email is invalid", "Email error", 3000);
      validRegistration = false;
    }

    if (
      Object.fromEntries(data.entries()).Name === "" ||
      Object.fromEntries(data.entries()).Email === "" ||
      Object.fromEntries(data.entries()).Password === "" ||
      Object.fromEntries(data.entries()).Password2 === ""
    ) {
      NotificationManager.error(
        "You must fill all fields",
        "An error occured",
        3000
      );
      validRegistration = false;
    }

    if (
      Object.fromEntries(data.entries()).Password !==
      Object.fromEntries(data.entries()).Password2
    ) {
      NotificationManager.error(
        "Passwords do not match",
        "Password error",
        3000
      );
      validRegistration = false;
    }

    if (validRegistration) {
      NotificationManager.success(
        "You have succefully been signed up",
        "Congratulations",
        3000
      );
    }
    if (!validRegistration) {
      e.preventDefault();
    }
  };

  const HandleSaveClick = () => {
    //1 = admin
    //2 = creator
    //3 = mod
    //4 = common
    //5 = banned
    useCreateUser(
      currentName,
      currentEmail,
      currentPassword,
      currentPassword2,
      currentLevel
    );
  };

  return (
    <>
      <div className="register-container">
        <div className="mt-5 mx-3">
          {authorized ? (
            <h3 lassName="text-light">Create new user</h3>
          ) : (
            <>
              <h5 className="text-light">New in Droppr?</h5>
              <h2 className="text-light">Sign up!</h2>
            </>
          )}
          <form
            className="form-container"
            onSubmit={handleSubmit}
            action="/signin"
          >
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control mb-4 mt-1"
                name="Name"
                placeholder="Username"
                value={currentName}
                onChange={(ev) => setCurrentName(ev.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control mb-4 mt-1"
                placeholder="example@gmail.com"
                name="Email"
                value={currentEmail}
                onChange={(ev) => setCurrentEmail(ev.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control mb-4 mt-1"
                placeholder="Password"
                name="Password"
                value={currentPassword}
                onChange={(ev) => setCurrentPassword(ev.target.value)}
              ></input>
            </div>

            <div className="form-group">
              <label>Repeat your password</label>
              <input
                type="password"
                className="form-control mb-4 mt-1"
                name="Password2"
                placeholder="Confirm your password"
                value={currentPassword2}
                onChange={(ev) => setCurrentPassword2(ev.target.value)}
              ></input>
            </div>
            {authorized ? (
              <div>
                <label>Access level</label>
                <input
                  type="level"
                  className="form-control mb-4 mt-1"
                  placeholder="1 = admin, 2 = content creator, 3 = moderator, 4 normal user"
                  onChange={(ev) => setCurrentLevel(ev.target.value)}
                ></input>
              </div>
            ) : (
              <div></div>
            )}
            <div className="button-container">
              <button
                type="submit"
                className="primary-style-button self-end"
                onClick={HandleSaveClick}
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <NotificationContainer />
    </>
  );
};

export default RegisterComponent;
