import { useState } from "react"

export default function Section({initName, symbol, isActive}){


const [isEditing, setIsEditing]=useState(false)
const [name ,setName] = useState(initName)

const playerBtnClickHandler = ()=>{
    setIsEditing((editing)=>!editing)
  console.log("edit")
}

const playerNameUpdate = (event)=>{
  setName(event.target.value)
}

    return(
        <li className={isActive?'active':undefined}>
            <span className="player">
                {!isEditing&&<span className="player-name">{name}</span>}
                {isEditing&&<input type="text" onChange={playerNameUpdate} value={name} required/>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={playerBtnClickHandler}>{isEditing?"Save":"Edit"}</button>
        </li>
    )
}