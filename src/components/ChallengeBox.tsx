import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Win 400 xp</header>

          <main>
            <img src="icons/body.svg" alt=""/>
            <strong>New Challenge</strong>
            <p>Stand up and make a 3 minute walk.</p>
          </main>

          <footer>
            <button 
              type="button" 
              className={styles.challengeFailButton}
            >
              Failed
            </button>
            <button 
              type="button" 
              className={styles.challengeSucceededButton}
            >
              Completed
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Complete a cycle to get new challenges</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up"/>
            Advance level completing challenges.
          </p>
        </div>
        )}
      </div>
  );
}