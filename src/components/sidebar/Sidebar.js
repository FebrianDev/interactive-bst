import Insert from "./actions/Insert"
import Delete from "./actions/Delete"
import Search from "./actions/Search"
import Traversal from "./actions/Traversal"

export default function (props) {
    const {bst} = props
    return (
        <>
            <aside className="w-36 fixed top-0 inline-block" aria-label="Sidebar">
                <div className="bg-black">
                    <ul className="space-y-1"></ul>
                </div>
            </aside>
            <aside className="w-36 fixed top-1/3 inline-block" aria-label="Sidebar">
                <div className="bg-primary">
                    <ul className="space-y-1">
                        <Insert bst={bst}/>
                        <Delete bst={bst}/>
                        <Search bst={bst}/>
                        <Traversal bst={bst}/>
                    </ul>
                </div>
            </aside>
        </>
    )
}