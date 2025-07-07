import { Field, ErrorMessage } from 'formik';

export default function Input({label, placeholder, error, ...props}){

    return(
        <p className="control">
            <label htmlFor={label}>{placeholder}</label>
            <Field type="text" name={label} placeholder={placeholder} {...props}/>
            <ErrorMessage className='validation-error' error={error} name={label} component="span" />
        </p>
    )
}