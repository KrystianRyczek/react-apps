import { useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom";
export default function ResultModal({ref, targetTime, remainingTime, timeExpired, resetTimer}){
// forwardRef for older react version
const dialog = useRef()
useImperativeHandle(ref,()=>{
return{
    open(){
        dialog.current.showModal()
    }
}});
const scroe = ((1-(remainingTime/(targetTime*1000)))*100).toFixed(0)

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            {timeExpired&&<h2>You lots!</h2>}
            {!timeExpired&&<h2>Your scrore is {scroe}!</h2>}
            <p>The target time was <strong>{targetTime} seconds.</strong></p>
            {!timeExpired&&<p>You stoped the timer with <strong>{(remainingTime/1000).toFixed(2)}seconds.</strong></p>}
            <form method='dialog' onSubmit={resetTimer}>
                <button>Close </button>
            </form>
        </dialog>,
        document.getElementById('modal')
    )
}