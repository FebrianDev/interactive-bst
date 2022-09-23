import {Icon} from "@iconify/react/dist/iconify"
import React from "react"

export default function (){

    const [insert, setInsert] = React.useState('')

    function Test(){
        console.log(insert)
    }

    return(
        <li>
            <a
                onClick={Test}
                className="flex items-center p-2 text-base font-normal text-gray-900 dark:text-white hover:bg-dark">

                <span className="flex-1 ml-3 whitespace-nowrap text-white">Insert</span>
                <Icon icon="ic:twotone-navigate-next" color="white" width="32" height="32"/></a>
        </li>
    )
}