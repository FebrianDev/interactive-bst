export default function Validation(formData, callback) {
    let formIsValid = true
    let errors = {}
    if (formData.name === "") {
        formIsValid = false
        errors["name"] = "Name must be filled!"
    }
    if (formData.email === "") {
        formIsValid = false
        errors["email"] = "Email must be filled!"
    }
    if (formData.password === "") {
        formIsValid = false
        errors["password"] = "Password must be filled!"
    }
    if (!formIsValid) {
        callback(errors)
    }

    return formIsValid
}
