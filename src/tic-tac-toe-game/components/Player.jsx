import { useState } from "react"

export default function Section({isActive, initName, changePlayerNameHandler, symbol}){


const [isEditing, setIsEditing]=useState(false)

const playerBtnClickHandler = ()=>{
    setIsEditing((editing)=>!editing)
  console.log("edit")
}

const playerNameUpdate = (event)=>{
  changePlayerNameHandler(symbol, event.target.value)
}

    return(
        <li className={isActive?'active':undefined}>
            <span className="player">
                {!isEditing&&<span className="player-name">{initName[symbol]}</span>}
                {isEditing&&<input type="text" onChange={playerNameUpdate} value={initName[symbol]} required/>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={playerBtnClickHandler}>{isEditing?"Save":"Edit"}</button>
        </li>
    )
}