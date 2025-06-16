import { useEffect, useRef, useState } from "react";

export default function ProgressBar({timer}){

    const [remainingTime, setRemainingTime] =useState(timer)
    const interval = useRef()
    useEffect(()=>{
    interval.current=setInterval(()=>{
        setRemainingTime((prevTime)=> prevTime-10 )
    },10)
    return(()=>{
        clearInterval(interval.current)

    }) 
    },[])

    return(<progress value={remainingTime}  max={timer} />)
}