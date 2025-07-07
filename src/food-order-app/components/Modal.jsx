import { useEffect, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";


export default function Modal({ref, children, className, closeBtnClickHandler}){
   const dialog = useRef()

//    useEffect(()=>{
//     if(open){
//         return dialog.current.showModal()
//     }
//     return dialog.current.close()

//    },[open])

   useImperativeHandle(ref,()=>{
    return{
        open(){
            dialog.current.showModal()
        },
        close(){
            dialog.current.close()
        }
    }});
    
    return(createPortal(
    <dialog ref={dialog} onClose={closeBtnClickHandler} className={`modal ${className}`} id='food-order-app-modal'>
       {children}
    </dialog>, document.getElementById('modal')) )
}