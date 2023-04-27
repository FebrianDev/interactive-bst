import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import {EyeIcon, EyeSlashIcon} from "@heroicons/react/24/solid";
import axios from "axios";

export default function () {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const [errorState, setErrorState] = useState("")

    axios.get("https://interactive-bst-backend-production.up.railway.app/api/user/1"
    ).then(data => {
        const user = data.data.data
        setName(user.name)
        setEmail(user.email)
        setPassword(user.password)
    })

    const [passValue, setPassValue] = useState({
        password: "",
        showPassword: false,
    });

    const handlePasswordChange = (prop) => (event) => {
        setPassValue({...passValue, [prop]: event.target.value});
    }

    const handleClickShowPassword = () =>
        setPassValue({...passValue, showPassword: !passValue.showPassword});

    return (
        <>
            <Sidebar/>
            <main className={"w-3/4 ml-auto my-10"}>
                {/*  // <SidebarLearn/>*/}
                <h3 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Profile</h3>

                <div className="space-y-4 md:space-y-6">
                    <div className="block relative w-80">
                        <label htmlFor="name"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input
                            type="text" name="name" id="name"
                            className="w-80 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={name}
                        />
                    </div>
                    <div className="block relative w-80">
                        <label htmlFor="email"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            type="email" name="email" id="email"
                            className="w-80 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={email}
                        />
                    </div>
                    <div className="password_2 block relative w-80">
                        <label htmlFor="password"
                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <div className="eye_div">
                            <input
                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                name={"password"}
                                id={"password"}
                                type={passValue.showPassword ? "text" : "password"}
                                value={password}
                            />
                            <div
                                className="icon_button absolute right-4 top-10"
                                onClick={handleClickShowPassword}
                            >
                                {passValue.showPassword ? (
                                    <EyeIcon className="h-6 font-extralight"/>
                                ) : (
                                    <EyeSlashIcon className="h-6 font-extralight"/>
                                )}
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </>
    )
}