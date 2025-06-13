export default function CustomInput({field, value=0, ...props}){

    return(
            <label htmlFor={`${field}`}> 
                <span>{field.replace('-',' ')}: </span>
                <input type="number" id={field} name={field} value={value} {...props}/>
            </label>
    )
} 
                                             
