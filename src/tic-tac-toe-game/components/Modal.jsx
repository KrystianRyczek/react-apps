export default function Modal ({winnerName, restartSelectHandler}){

    return (
        <div id="game-over">
            <h2>Gamer over!</h2>
            {winnerName&&<p>Winer is {winnerName}!</p>}
            {!winnerName&&<p>It's a draw!</p>}
            <button type="button" onClick={restartSelectHandler}> Rematch!</button>
        </div>
    )
}