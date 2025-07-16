import Header from './components/Header'
import NewOpinion from './components/NewOpinion'
import Opinions from './components/Opinions'
import  OpinionsContextProvider  from './store/OpinionsContextStateControlers'
import styles from './styles/styles.module.css'

export default function OpinionOptimisticUpdate(){

  return(
        <div className={styles['opinion-optimistic-update']}>
          <Header/>
          <main>
            <OpinionsContextProvider>
              <NewOpinion />
              <Opinions />
            </OpinionsContextProvider>
          </main>
        </div>
  )
}