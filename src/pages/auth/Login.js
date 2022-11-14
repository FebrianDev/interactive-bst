import {useRef} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"

export default function Login() {

    const email = useRef(null)
    const password = useRef(null)

    const navigate = useNavigate()

    function submitRegister() {
        const inputEmail = email.current.value
        const inputPassword = password.current.value

        const data = {
            email: inputEmail,
            password: inputPassword
        }

        axios.post("http://localhost:6060/api/login",
            data
        ).then(data => {
            console.log(data)
            if (data.status === "error") {
                console.log("Error")
                return
            }

            console.log('Success:', data)
            localStorage.setItem("ID", data.data.data.id)
            navigate("/dashboard")
        })
            .catch((error) => {
                console.error('Error:', error)
                navigate("/login")
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
                                Login User
                            </h1>
                            <div className="space-y-4 md:space-y-6">

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
                                        className="w-full text-white bg-primary hover:bg-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login
                                </button>

                                <p className={'text-red-500'}>Error</p>

                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don't have an account?<a href="/register"
                                                             className="font-medium text-primary hover:underline dark:text-primary">Register
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