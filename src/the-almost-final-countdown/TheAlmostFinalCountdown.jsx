import './styles/styles.css';
import Header from "./components/Header"
import Player from "./components/Player"
import ChallengeCard from './components/ChallengeCard';
export default function TheAlmostFinalCountdown() {

    return(
    <div id="the-almost-final-countdown">
      <Header/>
      <Player />
      <div id="challenges">
        <ChallengeCard title={'Easy'} targetTime={1}/>
        <ChallengeCard title={'Not Easy'} targetTime={5}/>
        <ChallengeCard title={'Getting Tough'} targetTime={10}/>
        <ChallengeCard title={'Pros Only'} targetTime={15} />
      </div>
    </div>
    )

}