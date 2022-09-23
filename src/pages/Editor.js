import BinarySearchTree from "../data/BinarySearchTree";
import React from "react";
import "./Editor.css"

const bst = new BinarySearchTree();

function Tree(props) {
    const { data } = props;

    function renderTree(node) {
        // eslint-disable-next-line array-callback-return
        return Object.entries(node).map(function ([key, value]) {
            if (key === 'left' && typeof value === 'object') {
                if (value !== null) {
                    return (
                        <li key={value.data}>
                            <Tree data={value} />
                        </li>
                    );
                }
                if (value === null) {
                    return null;
                }
            } else if (key === 'right' && typeof value === 'object') {
                if (value !== null) {
                    return (
                        <li key={value.data}>
                            <Tree data={value} />
                        </li>
                    );
                }
                if (value === null) {
                    return null;
                }
            }
        });
    }

    return data ? (
        <>
            <span className="tf-nc">{data.data}</span>
            <ul>{renderTree(data)}</ul>
        </>
    ) : (
        'EMPTY'
    );
}

function Editor() {
    const [root, setRoot] = React.useState(null);

    React.useEffect(() => {
        bst.add(50);
        bst.add(45);
        bst.add(55);
        bst.add(53);
        bst.add(54);
        bst.add(51);
        bst.add(40);
        bst.add(48);
        bst.add(60);
        bst.add(30);
        bst.add(80);
        bst.add(10);
        bst.add(42);
        bst.add(32);
        bst.add(58);
        setRoot((prev) => ({ ...prev, ...bst.root }));
    }, []);

    return (
        <div className="container relative mt-32">
            <div className="tf-tree tf-custom">
                <ul>
                    <li>
                        <Tree data={root} parent={bst.root} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Editor
