
import { useCreateUser } from "../../recoil/hooks/userHooks/useCRUDUser";
import { useGetPassword, useGetPassword2, useGetUserEmail, useGetUserLevel, useGetUserName } from "../../recoil/hooks/userHooks/useGetUserElements";
import { useSetUserEmail, useSetUserLevel, useSetUserName, useSetUserPassword, useSetUserPassword2 } from "../../recoil/hooks/userHooks/useSetUserElements";

const RegisterComponent = () => {
    
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
        useCreateUser(currentName, currentEmail, currentPassword, currentPassword2, 1)
    }

    return (

        <>        
            <div className="register-container">
                <div className="mt-5 mx-3">
                <h5 className="text-light">New in Droppr?</h5>
                <h2 className="text-light">Register</h2>
                <form className="form-container" action="/" >
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
                        placeholder="Enter your username"
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
                    <div className="button-container">
                    <button type="submit" className="btn btn-primary self-end" onClick={HandleSaveClick}>
                        Register
                    </button>              
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}

export default RegisterComponent;