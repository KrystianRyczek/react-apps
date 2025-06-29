import './styles/styles.css';
import Header from './components/Header'
import CoreConcept from './components/CoreConcept'
import Examples from './components/Examples'


export default function SimpleApss() {
    console.log('APP COMPONENT EXECUTING');
  
    return(
    <div id="simple-app">
      <Header/>
      <main id="main-sa">
      <CoreConcept/>
      <Examples/>
      </main>
    </div>
    )

}
