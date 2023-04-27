import {Link, useLocation, useNavigate} from "react-router-dom";
import {Icon} from "@iconify/react/dist/iconify";
import React from "react";
import Swal from "sweetalert2";

export default function Sidebar() {

    const navigate = useNavigate()
    const location = useLocation()

    React.useEffect(() => {

        const id = localStorage.getItem("ID")

        if (id === null) {
            navigate("/register")
        }

        console.log(location.pathname)
    }, [])

    function logout() {

        Swal.fire({
            title: 'Are you sure logout?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Success',
                    'You have been success logout.',
                    'success'
                )

                localStorage.removeItem("ID")
                navigate("/login")
            }
        })
    }

    return (<>
        <aside className="w-1/4 fixed top-1/4" aria-label="Sidebar">
            <div className="bg-white">
                <ul className="space-y-8">

                    {/*project Start*/}
                    {<li className={"border-white mt-4"}>

                        <Link
                            to={"/dashboard/project"}
                            className="flex ml-20 items-center p-2 text-base font-normal">

                            {location.pathname === "/dashboard/project" || location.pathname === "/dashboard/" || location.pathname === "/dashboard"? <>
                                <Icon icon="octicon:project-16" color="#2196f3" width={20} height={20}/>
                                <span
                                    className={`flex-1 ml-3 whitespace-nowrap text-primary text-xl font-bold`}> Project</span>

                            </> : <>
                                <Icon icon="octicon:project-16" color="#000" width={20} height={20}/>
                                <span
                                    className={`flex-1 ml-3 whitespace-nowrap text-black text-xl font-bold`}> Project</span>
                            </>}
                        </Link>
                    </li>}
                    {/*project End*/}

                    {/*Learn Start*/}
                    {<li className={"border-white"}>
                        <Link
                            to={"/dashboard/learn"}
                            className="flex ml-20 items-center p-2 text-base font-normal">

                            {location.pathname === "/dashboard/learn" ? <>
                                <Icon icon="fluent-emoji-high-contrast:page-facing-up" color="#2196f3"
                                      width={24}
                                      height={24}/>
                                <span
                                    className="flex-1 ml-2 whitespace-nowrap text-primary text-xl font-bold">Learn</span>
                            </> : <>
                                <Icon icon="fluent-emoji-high-contrast:page-facing-up" color="#000"
                                      width={24}
                                      height={24}/>
                                <span
                                    className="flex-1 ml-2 whitespace-nowrap text-black text-xl font-bold">Learn</span>
                            </>}
                        </Link>
                    </li>}
                    {/*Learn End*/}

                    {/*Quiz Start*/}
                    {<li className={"border-white"}>
                        <Link
                            to={"/dashboard/quiz"}
                            className="flex  ml-20 items-center p-2 text-base font-normal">

                            {location.pathname === "/dashboard/quiz" ? <>

                                <Icon icon="bi:question-circle" color="#2196f3" width={24} height={24}/>
                                <span
                                    className="flex-1 ml-2 whitespace-nowrap text-primary text-xl font-bold">Quiz</span>
                            </> : <>
                                <Icon icon="bi:question-circle" color="#000" width={24} height={24}/>
                                <span
                                    className="flex-1 ml-2 whitespace-nowrap text-black text-xl font-bold">Quiz</span>
                            </>}

                        </Link>
                    </li>}
                    {/*Quiz End*/}

                    {/*Profile Start*/}
                    {<li className={"border-white"}>
                        <Link
                            to={"/dashboard/profile"}
                            className="flex  ml-20 items-center p-2 text-base font-normal">
                            {location.pathname === "/dashboard/profile" ? <>
                                <Icon icon="healthicons:ui-user-profile-outline" color="#2196f3" width={28}
                                      height={28}/>
                                <span
                                    className="flex-1 ml-1 whitespace-nowrap text-primary text-xl font-bold">Profile</span>
                            </> : <>
                                <Icon icon="healthicons:ui-user-profile-outline" color="#000000" width={28}
                                      height={28}/>
                                <span
                                    className="flex-1 ml-1 whitespace-nowrap text-black text-xl font-bold">Profile</span>
                            </>}
                        </Link>
                    </li>}
                    {/*Profile End*/}

                    {/*Logout Start*/}
                    {<li className={"border-white"}>
                        <a
                            onClick={logout}
                            className="flex  ml-20 items-center p-2 text-base font-normal">
                            <Icon icon="simple-line-icons:logout" color="#000000" width={24} height={24}/>
                            <span
                                className="flex-1 ml-2 whitespace-nowrap text-black text-xl font-bold">Logout</span></a>
                    </li>}
                    {/*Logout End*/}

                </ul>
            </div>
        </aside>
    </>)
}