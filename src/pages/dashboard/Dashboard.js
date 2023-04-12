import {Route, Routes} from "react-router-dom"
import React from "react"
import Project from "./project/Project";
import Learn from "./learn/Learn";
import Sidebar from "./components/Sidebar";

export default function () {



    return (
      /*  <>
            <aside className="w-1/4 fixed top-1/4" aria-label="Sidebar">
                <div className="bg-white">
                    <ul className="space-y-8">

                        {/!*project Start*!/}
                        {<li className={"border-white mt-4"}>

                            <Link
                                to={"/dashboard/project"}
                                className="flex ml-20 items-center p-2 text-base font-normal">
                                <Icon icon="octicon:project-16" color="#2196f3" width={20} height={20}/>
                                <span
                                    className="flex-1 ml-3 whitespace-nowrap text-primary text-xl font-bold"> Project</span>
                            </Link>
                        </li>}
                        {/!*project End*!/}

                        {/!*Learn Start*!/}
                        {<li className={"border-white"}>
                            <Link
                                to={"/dashboard/learn"}
                                className="flex ml-20 items-center p-2 text-base font-normal">
                                <Icon icon="fluent-emoji-high-contrast:page-facing-up" color="#2196f3" width={24}
                                      height={24}/>
                                <span
                                    className="flex-1 ml-2 whitespace-nowrap text-primary text-xl font-bold">Learn</span></Link>
                        </li>}
                        {/!*Learn End*!/}

                        {/!*Quiz Start*!/}
                        {<li className={"border-white"}>
                            <a
                                className="flex  ml-20 items-center p-2 text-base font-normal">
                                <Icon icon="bi:question-circle" color="#2196f3" width={24} height={24}/>
                                <span
                                    className="flex-1 ml-2 whitespace-nowrap text-primary text-xl font-bold">Quiz</span></a>
                        </li>}
                        {/!*Quiz End*!/}

                        {/!*Profile Start*!/}
                        {<li className={"border-white"}>
                            <a
                                className="flex  ml-20 items-center p-2 text-base font-normal">
                                <Icon icon="healthicons:ui-user-profile-outline" color="#2196f3" width={28}
                                      height={28}/>
                                <span
                                    className="flex-1 ml-1 whitespace-nowrap text-primary text-xl font-bold">Profile</span></a>
                        </li>}
                        {/!*Profile End*!/}

                        {/!*Logout Start*!/}
                        {<li className={"border-white"}>
                            <a
                                onClick={logout}
                                className="flex  ml-20 items-center p-2 text-base font-normal">
                                <Icon icon="simple-line-icons:logout" color="#2196f3" width={24} height={24}/>
                                <span
                                    className="flex-1 ml-2 whitespace-nowrap text-primary text-xl font-bold">Logout</span></a>
                        </li>}
                        {/!*Logout End*!/}

                    </ul>
                </div>
            </aside>
            */
        <>
        <Sidebar/>
            <main className={"w-3/4 ml-auto my-10"}>
                <Routes>
                    <Route path={"/"} element={<Learn/>}/>
                    <Route path={"/project"} element={<Project/>}/>
                    <Route path={"/dashboard/learn"} element={<Learn/>}/>
                </Routes>
            </main>
        </>

    )
}