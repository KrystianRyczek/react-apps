import {calculateInvestmentResults, formatter} from '../helpers/investment.js'


const TableRow = ({row})=>{
    return(
        <tr>
            <td>{row.year}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(row.valueEndOfYear-row.investedCapital)}</td>
            <td>{formatter.format(row.investedCapital)}</td>
        </tr>
    )
}


export default function Result({inputsData}){

        const resultsArray = calculateInvestmentResults({...inputsData})
        const updatedResultsArray = resultsArray.map((result)=>{
               const investedCapital= inputsData.initialInvestment+inputsData.annualInvestment*result.year
               return ({...result, investedCapital})
               })

    return (
        <section >
            {!updatedResultsArray.length?<p className='center'>Please provide initial data!</p>
                                 :<table id="result">
                                     <thead>
                                         <tr>
                                             <th>Year</th>
                                             <th>Investment Value</th>
                                             <th>Interest(Yer)</th>
                                             <th>Total interest</th>
                                             <th>Invested Capital</th>
                                         </tr>
                                     </thead>
                                     <tbody>
                                         {updatedResultsArray.map((row, index)=><TableRow row={row}key={index}/>)}
                                     </tbody>
                                 </table>}
        </section>

    )
}
