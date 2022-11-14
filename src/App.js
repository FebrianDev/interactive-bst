import './App.css'
import Home from "./pages/home/Home"
import Register from "./pages/auth/Register"
import {Route, Routes} from 'react-router-dom'
import Dashboard from "./pages/dashboard/Dashboard"
import EditorPage from "./pages/editor/EditorPage"
import Login from "./pages/auth/Login";

function App() {

    return (
        <>
            {/*<Navbar/>*/}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={'/register'} element={<Register/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={"/dashboard"} element={<Dashboard/>}/>
                <Route path={'/dashboard/editor/:id'} element={<EditorPage/>}/>
            </Routes>
            {/*    <Sidebar bst={bst}/>*/}
            {/*   <Log/>*/}
            {/*<EditorPage bst={bst}/>*/}

        </>
    )
}

export default App
