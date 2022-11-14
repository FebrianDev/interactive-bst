import Editor from "@monaco-editor/react";
import React from "react";

export default function (props) {

    const data = props

    return (
        <>
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Generate Source Code {data.generate.language}
                </h3>

            </div>

            <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <Editor value={data.generate.generate} height="40vh"
                            defaultLanguage={data.generate.language}/>
                </p>
            </div>

        </>
    )
}