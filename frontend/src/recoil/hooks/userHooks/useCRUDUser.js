export const useCreateUser = (userName, userEmail, userPassword, userPassword2, userLevel) => {

    const requestOptions = {
        mothod: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
                            name: userName,
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