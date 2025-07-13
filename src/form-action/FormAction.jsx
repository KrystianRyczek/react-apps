import styles from './styles/styles.module.css'

import Header from './components/Header'
import Signup from './components/Signup'
export default function FormAction(){

    return(
        <div id='form-action' className={styles.formactioncontainer}>
            <Header />
            <Signup />
        </div>
    )
}