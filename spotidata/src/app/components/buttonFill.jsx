import styles from './button.module.css'



export function Start({ desc, onStartClick }) {
  return (
    <button id='btn' className={styles.start} onClick={onStartClick}>
      {desc} Start!
    </button>
  );
}

export function End(){
  return <div>a</div>
}