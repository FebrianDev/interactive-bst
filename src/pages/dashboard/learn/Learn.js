import React, {useState} from "react"
import Sidebar from "../components/Sidebar"
import Section1 from "./contents/Section1";
import Section2 from "./contents/Section2";
import Section3 from "./contents/Section3";
import Section4 from "./contents/Section4";
import Section5 from "./contents/Section5";
import Section6 from "./contents/Section6";
import Section7 from "./contents/Section7";
import "./Learn.css"

export default function () {

    const listData = [{
        title: <p>Materi 1 -- Binary Search Tree</p>,
        content: <Section1/>
    }, {
        title: <p>Materi 2 -- Implementasi Binary Search Tree</p>,
        content: <Section2/>
    }, {
        title: <p>Materi 3 -- Implementasi Binary Search Tree dalam Bahasa C</p>,
        content: <Section3/>
    }, {
        title: <p>Materi 4 -- Implementasi Binary Search Tree dalam Bahasa C++</p>,
        content: <Section4/>
    }, {
        title: <p>Materi 5 -- Implementasi Binary Search Tree dalam Bahasa C#</p>,
        content: <Section5/>
    }, {
        title: <p>Materi 6 -- Implementasi Binary Search Tree dalam Bahasa Java</p>,
        content: <Section6/>
    },{
            title: <p>Materi 7 -- Implementasi Binary Search Tree dalam Bahasa Javascript</p>,
            content: <Section7/>
        }
    ]

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