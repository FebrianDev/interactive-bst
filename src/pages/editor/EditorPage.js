import React, {useRef, useState} from "react"
import "./Editor.css"
import Tree from "./Render"
import {Icon} from "@iconify/react/dist/iconify"
import generateJS from "../../data/generate/GenerateSourceCodeJS"
import {useLocation} from "react-router-dom";
import BinarySearchTree from "../../data/BinarySearchTree"
import axios from 'axios'
import GenerateSourceCode from "./GenerateSourceCode";
import generateSourceCodeCpp from "../../data/generate/GenerateSourceCodeCpp";
import generateSourceCodeJava from "../../data/generate/GenerateSourceCodeJava";

const bst = new BinarySearchTree()

export default function EditorPage() {

    const location = useLocation()
    const pathname = location.pathname.split('/')[3]

    const refInsert = useRef(null)
    const refDelete = useRef(null)
    const refSearch = useRef(null)

    const [root, setRoot] = React.useState([])
    const [logList, setLogList] = React.useState([])
    const [showLog, setShowLog] = useState(null)
    const [print, setPrint] = React.useState([])
    const [generate, setGenerate] = useState(null)
    const [language, setLanguage] = useState(null)

    const [showModal, setShowModal] = React.useState("hidden")
    let i = 1
    React.useEffect(() => {

        if(root.length > 0 ) return

        axios.get(`http://localhost:6060/api/project/id/${pathname}`, {}).then(
            (data) => {
                console.log(data)
                const operation = data.data.data.bst_operation

                if (operation === "") return

                const splitBst = operation.split(',')
                console.log("Split "+splitBst.length)

                splitBst.map(data => {
                    if(splitBst.length === i) return;
                    console.log("Split "+splitBst.length+" "+i)
                    if (data === "preorder") preOrder()
                    else if (data === "postorder") postOrder()
                    else if (data === "inorder") inOrder()
                    else {
                        const key = data.split(':')[0]
                        const value = data.split(':')[1]

                        console.log("Inc "+i)

                        if (key === "insert") {insert(value); console.log("insert")}
                        else if (key === "delete") {deleteAwake(value); }
                        else if (key === "search") searchAwake(value)
                    }

                    i++
                })
            })
        //  setRoot((prev) => ({...prev, ...bst.root}))
    }, [])

    function insert(data) {
        bst.insert(parseInt(data))
        setRoot((prev) => ({...prev, ...bst.root}))
        setLogList(bst.getLogList())

        console.log(bst.getLogList())
    }

    function deleteAwake(data) {
        bst.delete(parseInt(data))
        setRoot((prev) => ({...prev, ...bst.root}))
        setLogList(bst.getLogList())
    }

    function searchAwake(data) {
        console.log("Search "+data)
        bst.search(bst.getRootNode(), parseInt(data))
        setLogList(bst.getLogList())
    }

    function Insert() {
        const data = parseInt(refInsert.current.value)
        if (isNaN(data)) {
            alert("Input Invalid")
            return
        }
        bst.insert(data)
        setRoot((prev) => ({...prev, ...bst.root}))
        updateLog()
        refInsert.current.value = ""
    }

    function Delete() {
        const data = parseInt(refDelete.current.value)
        if (isNaN(data)) {
            alert("Input Invalid")
            return
        }
        bst.delete(data)
        setRoot((prev) => ({...prev, ...bst.root}))
        updateLog()
        refDelete.current.value = ""
    }

    function Search() {
        const data = parseInt(refSearch.current.value)
        if (isNaN(data)) {
            alert("Input Invalid")
            return
        }

        const finalData = bst.search(bst.getRootNode(), data)
        if (finalData === null) alert("Data is null!")
        else {
            alert(finalData)
            updateLog()
        }

        refSearch.current.value = ""
    }

    function preOrder() {
        bst.clearList()
        setPrint([])
        bst.preorder(bst.getRootNode())
        setPrint(bst.getListPreOrder())
        updateLog()
    }

    function postOrder() {
        bst.clearList()
        setPrint([])
        bst.postorder(bst.getRootNode())
        setPrint(bst.getListPostOrder())
        updateLog()
    }

    function inOrder() {
        bst.clearList()
        setPrint([])
        bst.inorder(bst.getRootNode())
        setPrint(bst.getListInOrder())
        updateLog()
    }

    function updateLog() {
        console.log(bst.getLogList())
        setLogList(bst.getLogList())
        const final = bst.getLog()
        setShowLog(final)
        const update = {bst_operation: final}
        axios.put(`http://localhost:6060/api/project/id/${pathname}`, update)
            .then(
                response => console.log(response.data.status)
            )
    }

    function exportCode(code, language) {
        setShowModal('')
        setGenerate(code)
        setLanguage(language)
    }

    function hiddenModal() {
        setShowModal('hidden')
    }

    function copy(text) {
        navigator.clipboard.writeText(text)
        alert("Copied text to clipboard")
    }

    const [insertActive, setInsertActive] = React.useState('')
    const [deleteActive, setDeleteActive] = React.useState('')
    const [searchActive, setSearchActive] = React.useState('')
    const [traversalActive, setTraversalActive] = React.useState('')
    const [exportActive, setExportActive] = React.useState('')

    function active(insertActive, deleteActive, searchActive, traversalActive, exportActive) {
        setInsertActive(insertActive)
        setDeleteActive(deleteActive)
        setSearchActive(searchActive)
        setTraversalActive(traversalActive)
        setExportActive(exportActive)
    }

    return (
        <>
            <aside className="w-36 fixed top-0 inline-block" aria-label="Sidebar">
                <div className="bg-black">
                    <ul className="space-y-1"/>
                </div>
            </aside>

            <aside className="w-36 fixed top-1/3 inline-block" aria-label="Sidebar">
                <div className="bg-primary">
                    <ul className="space-y-1">

                        {/*Insert Start*/}
                        {<li className={"border-b-2 border-white"}>
                            <a
                                onClick={active.bind(this, 'active', '', '', '', '')}
                                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">

                                <span className="flex-1 ml-3 whitespace-nowrap text-white">Insert</span>
                                <Icon icon="ic:twotone-navigate-next" color="white" width="32" height="32"/></a>
                        </li>}
                        {/*Insert End*/}

                        {/*Delete Start*/}
                        <li className={"border-b-2 border-white"}>
                            <a
                                onClick={active.bind(this, '', 'active', '', '', '')}
                                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">

                                <span className="flex-1 ml-3 whitespace-nowrap text-white">Delete</span>
                                <Icon icon="ic:twotone-navigate-next" color="white" width="32" height="32"/></a>
                        </li>
                        {/*Delete End*/}

                        {/*Search Start*/}
                        <li className={"border-b-2 border-white"}>
                            <a onClick={active.bind(this, '', '', 'active', '', '')}
                               className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">

                                <span className="flex-1 ml-3 whitespace-nowrap text-white">Search</span>
                                <Icon icon="ic:twotone-navigate-next" color="white" width="32" height="32"/>
                            </a>
                        </li>
                        {/*Search End*/}

                        {/*Traversal Start*/}
                        <li className={"border-b-2 border-white"}>
                            <a onClick={active.bind(this, '', '', '', 'active', '')}
                               className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">

                                <span className="flex-1 ml-3 whitespace-nowrap text-white">Traversal</span>
                                <Icon icon="ic:twotone-navigate-next" color="white" width="32" height="32"/>
                            </a>
                        </li>
                        {/*Traversal End*/}

                        {/*Export Start*/}
                        <li className={"border-b-2 border-white"}>
                            <a onClick={active.bind(this, '', '', '', '', 'active')}
                               className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">

                                <span className="flex-1 ml-3 whitespace-nowrap text-white">Export</span>
                                <Icon icon="ic:twotone-navigate-next" color="white" width="32" height="32"/>
                            </a>
                        </li>
                        {/*Export End*/}

                    </ul>
                </div>
            </aside>

            {/*Insert Child Start*/}
            <div className={`w-32 fixed top-1/3 ml-40 hidden ${insertActive}`}>
                <div className="w-full">
                    <input
                        ref={refInsert}
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-20 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name" type="text"/>
                </div>
                <button
                    className="bg-yellowPrimary hover:bg-dark text-white font-bold py-2 px-4 rounded fixed top-1/3 ml-24"
                    onClick={Insert}>
                    GO
                </button>
            </div>
            {/*Insert Child End*/}

            {/*Delete Child Start*/}
            <div className={`w-32 fixed top-1/3 mt-14 ml-40 hidden ${deleteActive}`}>
                <div className="w-full">
                    <input
                        ref={refDelete}
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-20 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name" type="text"/>
                </div>
                <button
                    className="bg-yellowPrimary hover:bg-dark text-white mt-14 font-bold py-2 px-4 rounded fixed top-1/3 ml-24"
                    onClick={Delete.bind(this)}>
                    GO
                </button>
            </div>
            {/*Delete Child End*/}

            {/*Search Child Start*/}
            <div className={`w-32 fixed top-1/3 mt-28 ml-40 hidden ${searchActive}`}>
                <div className="w-full">
                    <input
                        ref={refSearch}
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-20 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        id="inline-full-name" type="text"/>
                </div>
                <button
                    className="bg-yellowPrimary hover:bg-dark text-white mt-14 font-bold py-2 px-4 rounded mt-28 fixed top-1/3 ml-24"
                    onClick={Search}>
                    GO
                </button>
            </div>
            {/*Search Child End*/}

            {/*Traversal Child Start*/}
            <aside className={`w-36 ml-40 mt-40 fixed top-1/3 hidden ${traversalActive}`} aria-label="Sidebar">
                <div className="bg-primary">
                    <ul className="space-y-1">

                        {/*Pre Order Start*/}
                        <li className={"border-b-2 border-white"}>
                            <a
                                onClick={preOrder}
                                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">
                                <span
                                    className="flex-1 ml-3 whitespace-nowrap text-white text-bold">Preorder</span></a>
                        </li>
                        {/*Pre Order End*/}

                        {/*Post Order Start*/}
                        <li className={"border-b-2 border-white"}>
                            <a
                                onClick={postOrder}
                                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">
                                <span
                                    className="flex-1 ml-3 whitespace-nowrap text-white text-bold">Postorder</span></a>
                        </li>
                        {/*Post Order End*/}

                        {/*In Order Start*/}
                        <li className={"border-b-8 border-white"}>
                            <a
                                onClick={inOrder}
                                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">
                                <span className="flex-1 ml-3 whitespace-nowrap text-white text-bold">Inorder</span></a>
                        </li>
                        {/*In Order End*/}
                    </ul>
                </div>
            </aside>
            {/*Traversal Child End*/}

            {/*Export Child Start*/}
            <aside className={`w-36 ml-40 mt-56 fixed top-1/3 hidden ${exportActive}`} aria-label="Sidebar">
                <div className="bg-primary">
                    <ul className="space-y-1">

                        {/*Export C Start*/}
                        <li className={"border-b-2 border-white"}>
                            <a
                                onClick={exportCode.bind(this, generateSourceCodeCpp(logList), "c")}
                                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">
                                <span
                                    className="flex-1 ml-3 whitespace-nowrap text-white text-bold">C</span></a>
                        </li>
                        {/*Export C End*/}

                        {/*Export C++ Start*/}
                        <li className={"border-b-2 border-white"}>
                            <a
                                onClick={exportCode.bind(this, generateSourceCodeCpp(logList), "c++")}
                                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">
                                <span
                                    className="flex-1 ml-3 whitespace-nowrap text-white text-bold">C++</span></a>
                        </li>
                        {/*Export C++ End*/}

                        {/*Export Java Start*/}
                        <li className={"border-b-2 border-white"}>
                            <a
                                onClick={exportCode.bind(this, generateSourceCodeJava(logList), "java")}
                                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">
                                <span className="flex-1 ml-3 whitespace-nowrap text-white text-bold">Java</span></a>
                        </li>
                        {/*Export Java End*/}

                        {/*Export JS Start*/}
                        <li className={"border-b-8 border-white"}>
                            <a
                                onClick={exportCode.bind(this, generateJS(logList), "javascript")}
                                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark"
                                data-modal-toggle="small-modal">

                                <span
                                    className="flex-1 ml-3 whitespace-nowrap text-white text-bold">Javascript</span></a>
                        </li>
                        {/*Export JS End*/}
                    </ul>
                </div>
            </aside>
            {/*Export Child End*/}

            <h3 className={"ml-40 mr-40 mt-72 inline-block fixed top-1/2 font-bold text-lg w-full"}>{print.map(data => " " + data)}</h3>

            {/*Modal Generate Source Code Start*/}
            <div id="defaultModal" tabIndex="-1" aria-hidden="true"
                 className={`${showModal} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}>
                <div className="relative left-1/4 ml-24 mt-24 p-4 w-full max-w-2xl h-full md:h-auto">

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                        <GenerateSourceCode generate={{generate: generate, language: language}}/>

                        <div
                            className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button onClick={() => copy(generate)} data-modal-toggle="defaultModal"
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Copy
                            </button>
                            <button onClick={hiddenModal} data-modal-toggle="defaultModal" type="button"
                                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*Modal Generate Source Code End*/}

            {/*Render*/}
            <div className="container-editor relative mt-32">
                <div className="tf-tree tf-custom">
                    <ul>
                        <li>
                            <Tree data={root}/>
                        </li>
                    </ul>
                </div>
            </div>
            {/*Render*/}

            <aside className="w-36 fixed bottom-0 right-0 overflow-scroll h-48 bg-primary" aria-label="Sidebar">
                <div className="bg-primary p-2">
                    <h2 className={'text-white font-bold text-sm text-center'}>Log</h2>
                    <hr className={'m-2'}/>
                    {logList.map((l) => <h3 key={l} className={"text-white font-bold text-sm text-center"}>{l}</h3>)}
                </div>
            </aside>

        </>
    )
}

