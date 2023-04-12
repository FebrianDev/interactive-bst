import React from "react"
import "./Editor.css"
export default function Tree(props) {

    const {data} = props

    function renderTree(node) {
        // eslint-disable-next-line array-callback-return
        return Object.entries(node).map(function ([key, value]) {
            if (key === 'left' && typeof value === 'object') {
                if (value !== null) {
                    return (
                        <li className={"v-active"}>
                            <p className={"absolute mr-20 mt-2"}>L</p>
                            <Tree data={value} />
                        </li>
                    )
                }
                if (value === null) {
                    return null
                }
            } else if (key === 'right' && typeof value === 'object') {
                if (value !== null) {
                    return (
                        <li>
                            <p className={"absolute ml-20 mt-2"}>R</p>
                            <Tree data={value}/>
                        </li>
                    )
                }
                if (value === null) {
                    return null
                }
            }
        })
    }

    return data ? (
        <>
            <span className="tf-nc text-white">{data.data}</span>
            <ul>{renderTree(data)}</ul>
        </>
    ) : (
        'EMPTY'
    )
}