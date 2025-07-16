import { useActionState, useContext, useOptimistic } from 'react';
import styles from '../styles/styles.module.css'
import { OpinionsContext } from '../store/OpinionsContext';

export default function Opinion({ opinion: { id, title, body, userName, votes } }) {
  
  
  const {upvoteOpinion, downvoteOpinion}=useContext(OpinionsContext)
  const upVoteAction = async()=>{
    setVoteOptimistically('up')
    await upvoteOpinion(id)
  }
  
  const downVoteAction = async()=>{
    setVoteOptimistically('down')
    await downvoteOpinion(id)
  }


  const[upVoteState, upVoteFormAction, upVotepending]=useActionState(upVoteAction, null)
  const[downVoteState, downVoteFormAction, downVotepending]=useActionState(downVoteAction, null)

  const [optimisticVoteState, setVoteOptimistically] = useOptimistic(votes, (prevVotes, mode)=>mode==='up'?prevVotes+1:prevVotes-1)
  


  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>
      <form className={styles['votes']}>
        <button disabled={upVotepending||downVotepending} formAction={()=>upVoteFormAction(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>

        <span>{optimisticVoteState}</span>

        <button disabled={upVotepending||downVotepending} formAction={downVoteFormAction}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </form>
    </article>
  );
}
