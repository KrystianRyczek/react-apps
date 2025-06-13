import {calculateInvestmentResults, formatter} from '../helpers/investment.js'

const TableRow = ({row})=>{
    return(
        <tr>
            <td>{row.year}</td>
            <td>{formatter.format(row.interest)}</td>
            <td>{formatter.format(row.valueEndOfYear)}</td>
            <td>{formatter.format(row.annualInvestment)}</td>
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
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Interest</th>
                        <th>Value End Of Year</th>
                        <th>Annual Investment</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {updatedResultsArray.map((row, index)=><TableRow row={row}key={index}/>)}
                </tbody>
            </table>
        </section>

    )
}
