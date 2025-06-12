


export default function GameBoard({squerSelectkHandler, gameBoard}){

    return(
        <ol id="game-board">
            {gameBoard.map((row, indexRow)=>{
                return(
                    <li key={indexRow}>
                        <ol>
                        {row.map((col, indexCol)=>{
                            return(
                                <li key={indexCol}>
                                    <button onClick={()=>squerSelectkHandler(indexCol, indexRow)} disabled={col!==null}>
                                        {col}
                                    </button>
                                </li>
                            )
                        })}
                        </ol>
                    </li>
                )
            })}
        </ol>
    )
}