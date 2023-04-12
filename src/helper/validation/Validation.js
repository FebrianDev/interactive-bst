function nameValidation(name) {
    let errors = ""
    if (name === "") {
        errors = "Name must be filled!"
    }
    return errors
}

function emailValidation(email){
    let errors = ""
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (email === "") {
        errors = "Email must be filled!"
    }else if(!email.match(mailFormat)){
        errors = "Invalid Email!"
    }
    return errors
}

function passwordValidation(password){
    let errors = ""
    if (password === "") {
        errors = "Password must be filled!"
    }else if(password.length < 6){
        errors = "Password must be at least 6 letters"
    }
    return errors
}

export {nameValidation, emailValidation, passwordValidation}