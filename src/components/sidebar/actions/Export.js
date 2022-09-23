import {Icon} from "@iconify/react/dist/iconify";

export default function (){
    return(
        <li>
            <a href="#"
               className="flex items-center p-2 text-base font-normal dark:text-white hover:bg-dark">

                <span className="flex-1 ml-3 whitespace-nowrap text-white">Export</span>
                <Icon icon="ic:twotone-navigate-next" color="white" width="32" height="32"/>
            </a>
        </li>
    )
}