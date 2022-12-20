// import { response } from "express";
import { useRecoilValue } from "recoil";
import { authAtom } from "../../atoms/userState";
import { asyncAllUsers, asyncGetUserByEmail, asyncGetUserById } from "../../selectors/userSelector";

export const useCreateUser = (userName, userEmail, userPassword, userPassword2, userLevel) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: userName,
            email: userEmail,
            password: userPassword,
            level: userLevel,
            bio: "Change your bio",
            pictureUrl: "https://avatars.dicebear.com/api/female/john.svg?background=%2314181c"
        })

    }

    fetch('http://localhost:3001/user', requestOptions)
    setTimeout(() => {
        window.location.href = "http://localhost:3000/signin"        
    }, 300);
    
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

export const useUpdateUser = (userId, userName, userPicture, userBio, currentAuth) => {

    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + currentAuth
        }, body: JSON.stringify({
            _id: userId,
            username: userName,
            pictureUrl: userPicture,
            bio: userBio
        })
    }
    fetch(`http://localhost:3001/user/${userId}`, requestOptions).then(response => {
        if (response.status == 401) {
            alert("Login timeout. Sign in again!")
            localStorage.removeItem("current_auth")
            localStorage.removeItem("current_user")
            setTimeout(() => {
                window.location.href = "http://localhost:3000"
            }, 200);
        } else if (response.ok) {
            window.location.href = "http://localhost:3000/profile"
        } else {
            window.location.href = "http://localhost:3000"
        }

    })
}

export const useDeleteUser = (userId, currentAuth) => {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Authorization': "Bearer " + currentAuth
        }
    }
    fetch(`http://localhost:3001/user/${userId}`, requestOptions).then(response => {
        alert(response.status)
        if (response.status == 401) {
            alert("Login timeout. Sign in again!")
            localStorage.removeItem("current_auth")
            localStorage.removeItem("current_user")
            setTimeout(() => {
                window.location.href = "http://localhost:3000"
            }, 200);
        } else if (response.ok) {
            localStorage.removeItem("current_auth")
            localStorage.removeItem("current_user")
            setTimeout(() => {
                window.location.href = "http://localhost:3000"
            }, 200);
        } else {
            window.location.href = "http://localhost:3000"
        }

    })

}


