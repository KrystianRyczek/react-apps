import CustomInput from "./CustomInput"
                                           
export default function UserInput({dataInputHandler, inputsData}){
    return (
        <section id="user-input">
            <div className='input-group'>
                <CustomInput field={"initial-investment"} onChange={dataInputHandler} value={inputsData.initialInvestment} min={0} max={10000000} step={500} />
                <CustomInput field={"annual-investment"} onChange={dataInputHandler} value={inputsData.annualInvestment} min={0} max={1000000} step={100}/>                       
                <CustomInput field={"expected-return"} onChange={dataInputHandler} value={inputsData.expectedReturn} min={0} max={100} step={0.1}/>                                
                <CustomInput field={"duration"} onChange={dataInputHandler} value={inputsData.duration} min={1} max={120} step={1}/>
            </div>
        </section>

    )
}
