import React from "react"

export default function (props) {
    const {logs} = props
    const list = []

   /* logs.split(",").forEach(log => {
        list.push(log)
    })*/

    //const [showLog, setShowLog] = React.useState(null)
    //  setShowLog((prev) => ({...prev, ...logs.root}))

    /* showLog.forEach((log) =>{
         console.log(log)
     })*/

    // console.log("LOG")

  /*  list.forEach((data) => {
        console.log("Final " + data)
    })*/

    console.log("This is Log")

    return (
        <>
            {/*<aside className="w-36 fixed bottom-0 right-0" aria-label="Sidebar">
                <div className="bg-primary p-2">
                    <h2 className={'text-white font-bold text-sm text-center'}>Log</h2>
                    <hr className={'m-2'}/>

                      {logs.forEach((log) =>{
                         <h3 className={"text-white ml-1"}>log</h3>
                     })}
                </div>
            </aside>*/}
        </>
    )
}