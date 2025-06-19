import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function MsgModal ({ref, msg}){
    
    const dialog = useRef()
    
    useImperativeHandle(ref,()=>{
    return{
        open(){
            dialog.current.showModal()
        },
    }});

    return createPortal(
        <dialog ref={dialog} className="msg-modal bg-stone-200 text-stone-950">
            <div>
                <h2 className="">Invalid input data</h2>
                <p>{msg}</p>
                <form method='dialog'>
                    <button className=" bg-stone-950 text-stone-400 hover:text-stone-50  ">Close </button>
                </form>
            </div>
        </dialog>,
         document.getElementById('modal')
    )
}