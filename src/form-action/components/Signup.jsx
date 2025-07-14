import styles from '../styles/styles.module.css'
import {isEmail, isNotEmpty, isEqualToOtherValue, hasMinLength} from '../helpers/validation.js'
import { useActionState } from 'react'



export default function Signup() {

  const submitAction = (prevFormState, formData )=>{

    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirm-password')
    const name = formData.get('first-name')
    const lastName = formData.get('last-name')
    const role = formData.get('role')
    const terms = formData.get('terms')
    const acquisitionChannel = formData.getAll('acquisition')
   

    let errors=[]
    if (!isEmail(email)){
      errors.push('Invalid email address.')
    }
    if (!isNotEmpty(password)|| hasMinLength(password,6)){
      errors.push('You must provide a password with at least six characters.')
    }
    if (!isNotEmpty(confirmPassword)|| hasMinLength(confirmPassword,6)){
      errors.push('You must provide a confirmPassword with at least six characters.')
    }
    if (!isEqualToOtherValue(password,confirmPassword)){
      errors.push('Password do not match.')
    }
    if (!isNotEmpty(name) || !isNotEmpty(lastName)){
      errors.push('Please provide both Your first and last name.')
    }
    if (!isNotEmpty(role)){
      errors.push('Please select a role.')
    }
    if(!terms){
      errors.push('You must agree to the terms and conditions.')
    }
    if(acquisitionChannel.length===0){
      errors.push('You selsect at least one acquisition chanel')
    }
    
    if(errors.length>0){
      return {errors, email, password, confirmPassword, name, lastName, role, terms, acquisitionChannel}
    }

  }

  const [formState, formAction ] = useActionState(submitAction, {errors:null})

  return (
    <form action={formAction} className={styles['form-action']}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className={styles['control-fa']}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email"  defaultValue={formState.email}/>
      </div>

      <div className={styles['control-fa-row']}>
        <div className={styles['control-fa']}>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" defaultValue={formState.password}/>
        </div>

        <div className={styles['control-fa']}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={formState.confirmPassword}
          />
        </div>
      </div>

      <hr />

      <div className={styles['control-fa']}>
        <div className={styles['control-fa']}>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" defaultValue={formState.name}/>
        </div>

        <div className={styles['control-fa']}>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" defaultValue={formState.lastName}/>
        </div>
      </div>

      <div className={styles['control-fa']}>
        <label htmlFor="role">What best describes your role?</label>
        <select id="role" name="role" defaultChecked={formState.role}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset className={styles['fieldset-fa']}>
        <legend>How did you find us?</legend>
        <div className={styles['control-fa']}>
          <input type="checkbox" id="google" name="acquisition" value="google" defaultChecked={formState.acquisitionChannel?.includes("google")} />
          <label htmlFor="google">Google</label>
        </div>

        <div className={styles['control-fa']}>
          <input type="checkbox" id="friend" name="acquisition" value="friend" defaultChecked={formState.acquisitionChannel?.includes("friend")} />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className={styles['control-fa']}>
          <input type="checkbox" id="other" name="acquisition" value="other" defaultChecked={formState.acquisitionChannel?.includes("other")} />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className={styles['control-fa']}>
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" defaultChecked={formState.terms}/>I
          agree to the terms and conditions
        </label>
      </div>
      {formState.errors&& <ul className={styles['error']}>
          {formState.errors.map(error=><li key={error}>{error}</li>)}
        </ul>}
      <p className={styles['form-actions']}>
        <button type="reset" className={styles['button-fa'] + styles['button-fa-flat']}>
          Reset
        </button>
        <button className={styles['button-fa'] }>Sign up</button>
      </p>
    </form>
  );
}
