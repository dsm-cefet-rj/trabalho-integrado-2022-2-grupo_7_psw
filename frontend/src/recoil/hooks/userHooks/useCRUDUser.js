// import { response } from "express";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../atoms/userState";
import { asyncAllUsers, asyncGetUserByEmail, asyncGetUserById } from "../../selectors/userSelector";

export const useCreateUser = (userName, userEmail, userPassword, userPassword2, userLevel) => {
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                            username: userName,
                            email: userEmail,
                            password: userPassword,
                            level: userLevel,
                            bio: "Change your bio",
                            pictureUrl: "https://avatars.dicebear.com/api/female/john.svg?background=%2314181c"
        })

    }

    if(userPassword === userPassword2){
        fetch('http://localhost:3001/user', requestOptions).then(response => {
            console.log(response);
            // localStorage.clear();
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

export const useUpdateUser = (userId, userName, userPicture, userBio) => {
    const currentAuth = useRecoilValue(authAtom)
    const requestOptions = {
        method: 'POST',
        Authorization: 'Basic '+ currentAuth, 
        Headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: userName,
            pictureUrl: userPicture,
            bio: userBio
        })
    }
    fetch(`http://localhost:3001/user${userId}`, requestOptions).then(response => {
        console.log(response)
    })
}

