import { useEffect, useRef} from "react";
import ProgressBar from "./ProgressBar";

const TIMER=3000
export default function DeleteConfirmation({ onConfirm, onCancel, open }) {
  
  
  const timer = useRef()



  useEffect(()=>{
      timer.current =setTimeout(()=>{
        onConfirm()
      }, TIMER)
     return(()=>{
      clearTimeout(timer.current )
     }) 
  },[open, onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="no-btn">
          No
        </button>
        <button onClick={onConfirm} className="yes-btn">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
