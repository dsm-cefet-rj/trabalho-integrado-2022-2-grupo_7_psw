import { useRecoilValue } from "recoil";
import { asyncAllUsers, asyncGetUserByEmail, asyncGetUserById } from "../../selectors/userSelector";

export const useCreateUser = (userName, userEmail, userPassword, userPassword2, userLevel) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                            username: userName,
                            email: userEmail,
                            password: userPassword,
                            level: userLevel
        })

    }

    if(userPassword === userPassword2){
        fetch('http://localhost:3001/user', requestOptions).then(response => {
            console.log(response);
            localStorage.clear();
         })        
    }else{
        alert("Passwords do not match")
    }
}

export const useGetAllUsers = () => {
    return useRecoilValue(asyncAllUsers)
}

export const useGetUserById = (id) => {
    return useRecoilValue(asyncGetUserById(id))
}

export const useGetUserByEmail = (email) => {
    return useRecoilValue(asyncGetUserByEmail(email))
}