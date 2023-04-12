import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import SidebarLearn from "../learn/components/SidebarLearn";

export default function () {

    return (
        <>
            <Sidebar/>
            <main className={"w-3/4 ml-auto my-10"}>
                {/*<SidebarLearn/>*/}
                <h3 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Quiz</h3>
            </main>
        </>
    )
}