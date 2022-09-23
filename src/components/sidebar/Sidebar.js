import {Icon} from '@iconify/react';
import Insert from "./actions/Insert";
import Delete from "./actions/Delete";
import Search from "./actions/Search";
import Traversal from "./actions/Traversal";

export default function () {
    return (
        <>
        <aside className="w-36 mt-56 absolute" aria-label="Sidebar">
            <div className="overflow-y-auto bg-primary">
                <ul className="space-y-1">

                    <Insert/>
                    <Delete/>
                    <Search/>
                  <Traversal/>
            </ul>
        </div>
        </aside>
</>
)
}