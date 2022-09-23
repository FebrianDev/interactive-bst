import './App.css';
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Editor from "./pages/Editor"
function App() {
    return (
        <>
            <Navbar/>
            <Sidebar/>
            <Editor/>
        </>
    );
}

export default App;
