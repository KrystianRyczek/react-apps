import { useRef } from "react";
import { useState } from "react";

export default function Player() {

  const inputPlayerName = useRef()
  const [playerName, setPlayerName] = useState("")

  const setPlayerNameHandler = ()=>{
    setPlayerName(inputPlayerName.current.value)
    inputPlayerName.current.value=""
  }

    return (
    <section id="player">
      <h2>Welcome {playerName? playerName+"!" :"unknown entity."}</h2>
      <p>
        <input ref={inputPlayerName} type="text"/>
        <button onClick={setPlayerNameHandler}>Set Name</button>
      </p>
    </section>
  );
}
