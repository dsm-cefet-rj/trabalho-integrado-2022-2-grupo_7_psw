import jwtDecode from "jwt-decode";


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
        })
        .catch(err => {
            if(err == `SyntaxError: Unexpected token 'U', "Unauthorized" is not valid JSON`){
                alert("Unauthorized. Incorrect username or password")
            }else{
                alert("ERRO")
            }
            window.location.href = "http://localhost:3000/signin" 
        })
    setTimeout(() => {
        window.location.href = "http://localhost:3000/"
    }, 300);
};
