import styles from '../styles/styles.module.css'
import {isNotEmpty, hasMinLength, hasMaxLength} from '../helpers/validation'
import { useActionState, useContext } from 'react'
import { OpinionsContext } from '../store/OpinionsContext'
import Submit from './Submit'

export default function NewOpinion() {
  const {addOpinion} = useContext(OpinionsContext)

  const submintOpinion = async (prevState, formData)=>{
    const userName = formData.get('userName')
    const title = formData.get('title')
    const body = formData.get('body')
    let errors = []
    
    if(!isNotEmpty(userName)||!hasMinLength(userName, 3)){
      errors.push('Please provide Your name')
    }
    if(!isNotEmpty(title)||!hasMinLength(title, 10)||!hasMaxLength(title,30)){
      errors.push('Title must be between 10 and 30 characters')
    }
    if(!isNotEmpty(body)||!hasMinLength(body, 10)||!hasMaxLength(body,300)){
      errors.push('Opinion must be between 10 and 300 characters')
    }
    if(errors.length>0){
      console.log(errors)
    return {errors, userName, title, body}
    }

    await addOpinion({userName, title, body, votes:0})
    return {errors:[]}
  }
  
  const [formState, formAction, pending] = useActionState(submintOpinion, {errors:[]})
  
  return (
    <div id="new-opinion" className={styles['new-opinion']}>
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className={styles['control-row']}>
          <p className={styles['control']}>
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={formState.userName}/>
          </p>

          <p className={styles['control']}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={formState.title}/>
          </p>
        </div>
        <p className={styles['control']}>
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={formState.body}></textarea>
        </p>
        {formState.errors.length>0&& <ul>
                                        {formState.errors.map(error=><li key={error}>{error}</li>)}
                                     </ul>
        }
        

          <Submit/>

      </form>
    </div>
  );
}
