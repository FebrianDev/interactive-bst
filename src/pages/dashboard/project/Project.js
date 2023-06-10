import React, {useRef} from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios"
import Sidebar from "../components/Sidebar"
import {URL} from "../../../URL"

export default function () {

    const [project, setProject] = React.useState([])
    const [dataType, setDataType] = React.useState('Int')
    const [showModal, setShowModal] = React.useState("hidden")

    const nameProjectRef = useRef(null)

    const navigate = useNavigate()

    const idUser = localStorage.getItem("ID")

    function createProject() {

        const data = {
            name_project: nameProjectRef.current.value,
            data_type: dataType,
            id_user: idUser,
            bst_operation: ''
        }

        axios.post(`${URL}/api/project`, data)
            .then((result) => {
                console.log('Success:', result.data.data.id)
                const id = result.data.data.id
                if (dataType === "Int")
                    navigate(`/dashboard/editor-int/${id}`)
                else if (dataType === "String")
                    navigate(`/dashboard/editor-string/${id}`)
                else if (dataType === "String")
                    navigate(`/dashboard/editor-float/${id}`)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    function openProject(id, dataType) {
        if (dataType === "Int")
            navigate(`/dashboard/editor-int/${id}`)
        else if (dataType === "String")
            navigate(`/dashboard/editor-string/${id}`)
        else if (dataType === "Float")
            navigate(`/dashboard/editor-float/${id}`)
    }

    React.useEffect(() => {
        fetch(`${URL}/api/project/${idUser}`).then(
            (response) => response.json()).then(
            (data) => {
                setProject(data.data)
            }
        )
    }, [])

    const handleChange = (event) => {
        setDataType(event.target.value)
    }

    function hiddenModal() {
        setShowModal('hidden')
    }

    function show() {
        setShowModal('')
    }

    return (
        <>
            <Sidebar/>
            <main className={"w-3/4 ml-auto my-10"}>
                <h3 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">New
                    Project</h3>

                <div
                    className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#" onClick={show}>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Create New
                            Project</h5>
                    </a>
                </div>

                <h3 className="mt-12 mb-4 text-xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Open
                    Project</h3>

                {
                    project.map((d) =>
                        <div
                            className="mt-4 p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <a href="#" onClick={openProject.bind(this, d.id, d.data_type)}>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{d.name_project}</h5>
                            </a>
                        </div>
                    )
                }

                {/*Create New Project Start*/}
                <div id="defaultModal" tabIndex="-1" aria-hidden="true"
                     className={`${showModal} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full`}>
                    <div className="relative left-1/4 ml-24 mt-24 p-4 w-full max-w-2xl h-full md:h-auto">

                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div
                                className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Create Project
                                </h2>
                            </div>

                            <div className="p-6 space-y-6">
                                <div className="grid gap-6 mb-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="first_name"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Project
                                            Name</label>
                                        <input ref={nameProjectRef} type="text" id="first_name"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               required/>

                                        <label htmlFor="countries"
                                               className="block mt-8 mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Data
                                            Type</label>
                                        <select

                                            onChange={handleChange}
                                            id="countries"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option value="Int" selected>Int</option>
                                            <option value="String">String</option>
                                            <option value="Float">Float</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">

                                <button onClick={hiddenModal} data-modal-toggle="defaultModal" type="button"
                                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                                    Close
                                </button>

                                <button onClick={createProject} data-modal-toggle="defaultModal"
                                        type="button"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Create
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/*Create New Project End*/}

        </>
    )
}
