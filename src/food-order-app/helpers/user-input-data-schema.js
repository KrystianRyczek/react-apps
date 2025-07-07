import { object, string} from 'yup';


export const userInputDataSchema = object({
    name: string('Must be a string').required('Full name is required!'),
    email: string('Must be a string').email('Must be a valid email').required('Email name is required!'),
    street: string('Must be a string').required('Street name is required!'),
    code: string().matches( /^[0-9]{2}[-][0-9]{3}$/,"Poctal code pattern is XX-XXX").required('Code name is required!'),
    city:string('Must be a string').required('City name is required!'),

  });
