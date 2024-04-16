function validateForm(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let usernameErr = document.getElementById("userNameErr")
    let passwordErr = document.getElementById("passwordErr")
    let isValid = true 
    if (username == ""){
         usernameErr.innerText = "userName is Required"
         isValid = false

    }
    if (password == ""){
        passwordErr.innerText = "PSW is Required"
        isValid = false
   }

   return isValid 
}

