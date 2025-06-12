import Player from './Player'

export default function Players({activePlayer}){
    return(
        <ol id="players" className='highlight-player'>
            <Player initName="Player1" symbol="X" btnLabel="Edit" isActive={activePlayer==="X"} />
            <Player initName="Player2" symbol="O" btnLabel="Edit" isActive={activePlayer==="O"}/>
        </ol>
    )
}