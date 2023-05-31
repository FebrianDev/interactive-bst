import './App.css'
import Home from "./pages/home/Home"
import Register from "./pages/auth/Register"
import {Route, Routes} from 'react-router-dom'
import EditorPageInt from "./pages/editor/EditorPageInt"
import Login from "./pages/auth/Login";
import Learn from "./pages/dashboard/learn/Learn";
import Project from "./pages/dashboard/project/Project";
import Quiz from "./pages/dashboard/quiz/Quiz";
import Profile from "./pages/dashboard/profile/Profile";
import axios from "axios";
import EditorPageFloat from "./pages/editor/EditorPageFloat";
import EditorPageString from "./pages/editor/EditorPageString";
import {URL} from "./URL"

function App() {

    const idUser = localStorage.getItem("ID")

    axios.get(`${URL}/api/project/`+idUser)
        .then((result) => {
            console.log(result.data.data)
        }).catch((error) => {
            console.log(error)
    })

    return (
        <>
            {/*<Navbar/>*/}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/'} element={<Project/>}/>
                <Route path={'/dashboard/'} element={<Project/>}/>
                <Route path={'/dashboard/editor-int/:id'} element={<EditorPageInt/>}/>
                <Route path={'/dashboard/editor-string/:id'} element={<EditorPageString/>}/>
                <Route path={'/dashboard/editor-float/:id'} element={<EditorPageFloat/>}/>
                <Route path={'/dashboard/project'} element={<Project/>}/>
                <Route path={'/dashboard/learn'} element={<Learn/>}/>
                <Route path={'/dashboard/quiz'} element={<Quiz/>}/>
                <Route path={'/dashboard/profile'} element={<Profile/>}/>
            </Routes>

        </>
    )
}

export default App
