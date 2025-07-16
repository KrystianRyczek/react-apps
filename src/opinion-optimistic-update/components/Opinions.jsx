import { use } from 'react';
import Opinion  from './Opinion';
import { OpinionsContext } from '../store/OpinionsContext';
import styles from '../styles/styles.module.css'

export default function Opinions() {

  const { opinions } = use(OpinionsContext);
  
  return (
    <div id="opinions" className={styles['opinions']}>
      <h2>User Opinions</h2>
      {opinions && (
        <ul>
          {opinions.map((o) => (
            <li key={o.id}>
              <Opinion opinion={o} />
            </li>
          ))}
        </ul>
      )}
      {!opinions && (
        <p>No opinions found. Maybe share your opinion on something?</p>
      )}
    </div>
  );
}
