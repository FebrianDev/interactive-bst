import {useRef, useState} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import {emailValidation, nameValidation, passwordValidation} from "../../helper/validation/Validation"

export default function Register() {

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const [errorState, setErrorState] = useState("")

    const navigate = useNavigate()

    function submitRegister() {
        const inputName = name.current.value
        const inputEmail = email.current.value
        const inputPassword = password.current.value

        if (nameValidation(inputName) !== "") {
            setErrorState(nameValidation(inputName))
            return
        } else if (emailValidation(inputEmail) !== "") {
            setErrorState(emailValidation(inputEmail))
            return
        } else if (passwordValidation(inputPassword) !== "") {
            setErrorState(passwordValidation(inputPassword))
            return
        }

        setErrorState("")

        const data = {
            name: inputName,
            email: inputEmail,
            password: inputPassword
        }

        axios.post("http://localhost:6060/api/register",
            data,
        ).then((data) => {
            console.log('Success:', data)
            localStorage.setItem("ID", data.data.data.id)
            navigate("/dashboard")
        })
            .catch((error) => {
                console.error('Error:', error.message)
                setErrorState(error.message)
                navigate("/register")
            })
    }

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div
                        className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Register User
                            </h1>
                            <div className="space-y-4 md:space-y-6">

                                <div>
                                    <label htmlFor="name"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                    <input
                                        ref={name}
                                        type="text" name="name" id="name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="John" required=""/>
                                </div>

                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input
                                        ref={email}
                                        type="email" name="email" id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="john@gmail.com" required=""/>
                                </div>
                                <div>
                                    <label htmlFor="password"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input
                                        ref={password}
                                        type="password" name="password" id="password" placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""/>
                                </div>
                                <button onClick={submitRegister}
                                        className="w-full text-white bg-primary hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register
                                </button>

                                <p className={'text-red-500'}>{errorState}</p>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <a href="/login"
                                                                className="font-medium text-primary hover:underline dark:text-primary">Login
                                    here</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}