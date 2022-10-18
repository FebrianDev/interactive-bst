import {Icon} from "@iconify/react/dist/iconify"
import React from "react"
import Editor from "../../../pages/Editor";

export default function () {

    //  const {bst} = props

    /* const {bst} = props
     const [b, setB] = React.useState(bst)

     function Test() {
         bst.add(Math.floor(Math.random() * 100))
         setB(bst)
     }*/


    function Insert() {
        //bst.add(bst.add(Math.floor(Math.random() * 10)))

        // setRoot((prev) => ({...prev, ...bst.root}))
    }

    // bst.add(Math.floor(Math.random() * 10))

    return (
        <>

            {/*    <Editor/>*/}
            <li>
                <a
                    /*onClick={Editor.Insert.bind(this)}*/
                    className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">

                    <span className="flex-1 ml-3 whitespace-nowrap text-white">Insert</span>
                    <Icon icon="ic:twotone-navigate-next" color="white" width="32" height="32"/></a>
            </li>
        </>
    )
}