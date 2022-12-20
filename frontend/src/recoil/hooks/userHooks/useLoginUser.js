import jwtDecode from "jwt-decode";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


export const useLoginUser = (currentUserName, currentPassword, setUser, setAuth) => {
    const customHeaders = {
        "Content-Type": "application/json",
    };
    const requestOptions = {
        method: "POST",
        headers: customHeaders,
        body: JSON.stringify({
            username: currentUserName,
            password: currentPassword
        }),
    }
    // console.log(requestOptions)

    fetch("http://localhost:3001/login", requestOptions)
        .then(response => response.json())
        .then(data => {
            setAuth(data.token);
            setUser(jwtDecode(data.token));
            setTimeout(() => {
                window.location.href = "http://localhost:3000/"
            }, 300);
        })
        .catch(err => {
            if(err == `SyntaxError: Unexpected token 'U', "Unauthorized" is not valid JSON`){
                NotificationManager.error('Username or password incorrect', 'Unathorized', 3000);
            }else{
                NotificationManager.error('An error occurred', 'Error', 3000);
            }
        })
};
