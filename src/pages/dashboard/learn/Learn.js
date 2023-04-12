import React, {useState} from "react"
import Sidebar from "../components/Sidebar"
import Learn from "./Learn.css"
import Section1 from "./contents/Section1";
import Section2 from "./contents/Section2";
import Section3 from "./contents/Section3";
import Section4 from "./contents/Section4";

export default function () {

    const listData = [{
        title: <p>Section 1 -- Introduction To Binary Trees</p>,
        content: <Section1/>
    }, {
        title: <p>Section 2 -- Binary Tree Problems</p>,
        content: <Section2/>
    }, {
        title: <p>Section 3 -- C/C++ Solutions</p>,
        content: <Section3/>
    }, {
        title: <p>Section 4 -- Java Binary Trees and Solutions</p>,
        content: <Section4/>
    }]

    const [showSidebar, setShowSidebar] = useState(false)

    const [id, setId] = useState(0)

    return (
        <>
            <Sidebar/>
            <main className={"w-3/4 ml-auto my-10"}>
                {showSidebar ? (
                    <button
                        className="flex text-4xl text-black items-center cursor-pointer fixed right-10 top-6 z-50"
                        onClick={() => setShowSidebar(!showSidebar)}
                    >
                        x
                    </button>
                ) : (
                    <svg
                        onClick={() => setShowSidebar(!showSidebar)}
                        className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
                        fill="#000"
                        viewBox="0 0 100 80"
                        width="40"
                        height="40"
                    >
                        <rect width="100" height="10"/>
                        <rect y="30" width="100" height="10"/>
                        <rect y="60" width="100" height="10"/>
                    </svg>
                )}
                <div
                    className={`top-0 right-0 w-[25vw] bg-white p-10 shadow-2xl text-white fixed h-full z-40  ease-in-out duration-300 ${
                        showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}>

                    <h3 className="mt-8 text-4xl font-semibold text-black">List Material</h3>
                    <ol className={"mt-12 ml-4 list-decimal"}>
                        {listData.map((value, key) =>
                            <li className={`mx-8 flex py-2  font-semibold ${key === id ? "text-primary" : "text-black"} group-hover:text-primary`}
                                onClick={() => setId(key)}>{value.title}</li>)}
                    </ol>
                </div>
                <h3 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Learn</h3>

                <h4 className="mb-2 mt-12 text-lg font-bold tracking-tight leading-none text-gray-900 md:text-xl lg:text-2xl dark:text-white">{listData[id].title}</h4>
                <div className={"learn relative w-2/3"}>
                    <p>{listData[id].content}</p>
                </div>
            </main>
        </>
    )
}