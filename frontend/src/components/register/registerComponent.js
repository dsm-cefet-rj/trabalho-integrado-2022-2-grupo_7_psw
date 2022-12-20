
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authAtom, userAtom, userNameState } from "../../recoil/atoms/userState";
import { useCreateUser } from "../../recoil/hooks/userHooks/useCRUDUser";
import { useGetPassword, useGetPassword2, useGetUserEmail, useGetUserLevel, useGetUserName } from "../../recoil/hooks/userHooks/useGetUserElements";
import { useLoginUser } from "../../recoil/hooks/userHooks/useLoginUser";
import { useSetUserEmail, useSetUserLevel, useSetUserName, useSetUserPassword, useSetUserPassword2 } from "../../recoil/hooks/userHooks/useSetUserElements";

const RegisterComponent = () => {
    let loggeduser = useRecoilValue(userAtom)
    let authorized = false;

    let setAuth = useSetRecoilState(authAtom)
    let setUser = useSetRecoilState(userAtom)

    let [currentLevel, setCurrentLevel] = useState("4");
    if(loggeduser){
        if(loggeduser.level == 1){
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

    const  HandleSaveClick = () => {
        //1 = admin
        //2 = creator
        //3 = mod
        //4 = common
        //5 = banned
        useCreateUser(currentName, currentEmail, currentPassword, currentPassword2, currentLevel)

    }

    return (

        <>        
            <div className="register-container">
                <div className="mt-5 mx-3">
                {authorized? (
                    <h3 lassName="text-light">Create new user</h3>
                ): (
                    <>
                        <h5 className="text-light">New in Droppr?</h5>
                        <h2 className="text-light">Sign up!</h2>
                    </>
                )
                }
                <div className="form-container" >
                    <div className="form-group">
                    <label>Nome</label>
                    <input
                        type="text"
                        className="form-control mb-4 mt-1"
                        placeholder="Enter your username"
                        value={currentName}
                        onChange={ev => setCurrentName(ev.target.value)}                       
                    ></input>
                    </div>
                    <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        className="form-control mb-4 mt-1"
                        placeholder="Enter your email"
                        value={currentEmail}
                        onChange={ev => setCurrentEmail(ev.target.value)}
                    ></input>
                    </div>
                    
                    <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control mb-4 mt-1"
                        placeholder="********"
                        value={currentPassword}
                        onChange={ev => setCurrentPassword(ev.target.value)}
                    ></input>
                    </div>
                    
                    <div className="form-group">
                    <label>Repeat your password</label>
                    <input
                        type="password"
                        className="form-control mb-4 mt-1"
                        placeholder="********"
                        value={currentPassword2}
                        onChange={ev => setCurrentPassword2(ev.target.value)}
                    ></input>
                    </div>
                    {authorized? (
                        <div>
                            <label>Access level</label>
                             <input
                             type="level"
                             className="form-control mb-4 mt-1"
                             placeholder="1 = admin, 2 = content creator, 3 = moderator, 4 normal user"
                             onChange={ev => setCurrentLevel(ev.target.value)}
                         ></input>
                        </div>

                    ): (
                        <div></div>
                    )

                    }
                    <div className="button-container">
                    <button className="btn btn-primary self-end" onClick={HandleSaveClick}>
                        Register
                    </button>              
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default RegisterComponent;