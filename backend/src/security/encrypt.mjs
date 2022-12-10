// const bcrypt = require('bcryptjs');
import bcrypt from "bcryptjs"


function encrypt (password) {
    let hashedPassword = "nada"


    bcrypt.genSalt(10, function (err, Salt) {
  
        // The bcrypt is used for encrypting password.
        bcrypt.hash(password, Salt, function (err, hash) {
            
            if (err) {
                return console.log('Cannot encrypt');
            }
            
            hashedPassword = hash;
      
        })
    
    }).then(response => {
        return response
    })
   
    
    
}

export default encrypt
