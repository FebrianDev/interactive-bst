import './App.css';
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Editor from "./pages/Editor"
import BinarySearchTree from "./data/BinarySearchTree";
import Log from "./data/Log"

/*let logs = ""*/

function App() {

    const l = new Log()
    const bst = new BinarySearchTree(l)

    bst.add(100)

    return (
        <>
            <Navbar/>
        {/*    <Sidebar bst={bst}/>*/}
         {/*   <Log/>*/}
            <Editor bst={bst}/>

        </>
    );
}

export default App;
