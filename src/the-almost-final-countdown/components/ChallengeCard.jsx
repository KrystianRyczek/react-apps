import { useRef, useState } from "react"
import ResultModal from "./ModalResult"


export default function ChallengeCard({title, targetTime}){
   const interval = useRef()
   const modalRef = useRef()
  
   const [remainingTime, setRemainingTime] = useState(targetTime*1000)

   const timerIsActive = remainingTime < targetTime*1000
   const timeExpired = remainingTime<=0

   if(remainingTime<=0){
    clearInterval(interval.current)
    modalRef.current.open()
   }

   const activeTimer = ()=>{
    interval.current = setInterval(()=>{
        setRemainingTime((prevRemainingTime)=>prevRemainingTime-10)
        },10)
   }

   const inactiveTimer = ()=>{
    modalRef.current.open()
    clearInterval(interval.current)
    }
    
    const resetTimer=()=>{
        setRemainingTime(targetTime*1000)
    }


    return(
        <>
        <ResultModal ref={modalRef} targetTime={targetTime} remainingTime={remainingTime} timeExpired={timeExpired} resetTimer={resetTimer}/>
        <section className="challenge">
        <h2>{title}</h2>
        {timeExpired &&<p>You lost</p>}
        {!timeExpired &&<p className="challange-time">{targetTime} second{targetTime>1?'s':''}</p>}
        <p>
            <button onClick={!timerIsActive?activeTimer:inactiveTimer}>{!timerIsActive?'Start Challange!':'Stop!'}</button>
        </p>
        <p className={timerIsActive?'active':undefined}>
            {timerIsActive?'Time is running':'Timer is inactive'}
        </p>
       </section>
        </>

    )
}