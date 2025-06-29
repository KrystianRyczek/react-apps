import Player from './Player'

export default function Players({activePlayer, name, changePlayerNameHandler}){
    return(
        <ol id="players" className='highlight-player'>
            <Player initName={name} symbol="X" btnLabel="Edit" isActive={activePlayer==="X"} changePlayerNameHandler={changePlayerNameHandler}/>
            <Player initName={name} symbol="O" btnLabel="Edit" isActive={activePlayer==="O"} changePlayerNameHandler={changePlayerNameHandler}/>
        </ol>
    )
}