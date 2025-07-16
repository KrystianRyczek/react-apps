import { useFormStatus } from "react-dom"
import styles from '../styles/styles.module.css'
export default function Submit(){

    const {pending} = useFormStatus() //must be us in form nested component

    return(
        <p className={styles['actions']}>
            <button type="submit" disabled={pending}>
                {pending?'submiting...':'Submit'}   
            </button>
        </p>
        

    )
}