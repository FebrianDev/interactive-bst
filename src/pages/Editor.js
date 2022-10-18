import React, {useRef} from "react"
import "./Editor.css"
import Tree from "./Render"
import {Icon} from "@iconify/react/dist/iconify";

export default function Editor(props) {

    const {bst} = props

    const refInsert = useRef(null)
    const refDelete = useRef(null)
    const refSearch = useRef(null)
    const refTraversal = useRef(null)
    const refExport = useRef(null)

    const [root, setRoot] = React.useState(bst)
    const [log, setLog] = React.useState(null)
    const [logList, setLogList] = React.useState([])

    React.useEffect(() => {
        setRoot((prev) => ({...prev, ...bst.root}))
    }, [bst])

    function Insert() {
        const data = parseInt(refInsert.current.value)
        if (isNaN(data)) {
            alert("Input Invalid")
            return
        }
        bst.add(data)
        setRoot((prev) => ({...prev, ...bst.root}))
        setLog(bst.getLog())
        setLogList(bst.getLogList())

        refDelete.current.value = ""
    }

    function Delete() {
        const data = parseInt(refDelete.current.value)
        if (isNaN(data)) {
            alert("Input Invalid")
            return
        }
        bst.remove(data)
        setRoot((prev) => ({...prev, ...bst.root}))
        setLog(bst.getLog())
        setLogList(bst.getLogList())

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
        else alert(finalData)

        refDelete.current.value = ""
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
                            <a onClick={active.bind(this, '', '', 'active','','')}
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
                            <a href="#"
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
                    onClick={Insert.bind(this)}>
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
                                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">
                                <span
                                    className="flex-1 ml-3 whitespace-nowrap text-white text-bold">Pre Order</span></a>
                        </li>
                        {/*Pre Order End*/}

                        {/*Post Order Start*/}
                        <li className={"border-b-2 border-white"}>
                            <a
                                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">
                                <span
                                    className="flex-1 ml-3 whitespace-nowrap text-white text-bold">Post Order</span></a>
                        </li>
                        {/*Post Order End*/}

                        {/*In Order Start*/}
                        <li className={"border-b-8 border-white"}>
                            <a
                                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">
                                <span className="flex-1 ml-3 whitespace-nowrap text-white text-bold">In Order</span></a>
                        </li>
                        {/*In Order End*/}
                    </ul>
                </div>
            </aside>
            {/*Traversal Child End*/}

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


