import PlayersSection from "./Players"
import GameBoard from "./GameBoard"
import Log from "./Log";
import Modal from "./Modal";
import { useState } from 'react';
import { WINNING_COMBINATIONS } from "../helpers/helpers";

export default function GameSection(){
    const [gameTurns, setGameTurns]=useState([])

    const initgameState = [
        [null,null,null,],
        [null,null,null,],
        [null,null,null,],
    ]

    const gameBoard = [...initgameState.map((array)=>[...array])]

    for(const turn of gameTurns){
        const {squer, player} = turn
        const {row, col} =squer
        gameBoard[row][col]=player
    }

    const curentPlayer = (logGame)=>{
        if(logGame.length>0 && logGame[0].player ==='X'){
            return 'O'
        }
        return 'X'
    }

    let winner = false
    let winnerName =""
    const activePlayer = curentPlayer(gameTurns)
    const draw = gameTurns.length===9 && !winner


    for( const conbinations of WINNING_COMBINATIONS){
        const symbolArray=conbinations.map((conbination)=>gameBoard[conbination.row][conbination.column])
        const setSymbols =  new Set(symbolArray)
    
        if(setSymbols.size===1&&!setSymbols.has(null)){
            winner = true
            winnerName = setSymbols.has('X')?'X':'O'
        }      
    }

    const squerSelectkHandler = (indexCol, indexRow)=>{

        setGameTurns((prevGameTurns)=>{
                const updatedGameTurns = [{squer:{row:indexRow, col:indexCol}, 
                                           player: curentPlayer(prevGameTurns)}, 
                                           ...gameTurns]
                return updatedGameTurns
        })
    }

    const restartSelectHandler = ()=>{
        setGameTurns([])
    }

    return(
        <main>
            <div id="game-container">
                <PlayersSection activePlayer={activePlayer}/>
                {(winner||draw)&&<Modal winnerName={winnerName} restartSelectHandler={restartSelectHandler}/>}
                <GameBoard squerSelectkHandler={squerSelectkHandler}
                           gameBoard={gameBoard}
                           />
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}