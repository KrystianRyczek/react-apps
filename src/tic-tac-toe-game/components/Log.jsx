export default function Log({turns}){

    return(
        <ol id="log">
       { turns.map((turn)=><li key={`${turn.squer.row}${turn.squer.col}`}>Player {turn.player} select: row{turn.squer.row}, column {turn.squer.col}</li>)}
        </ol>
    )
}