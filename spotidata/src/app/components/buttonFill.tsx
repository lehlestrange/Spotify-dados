import styles from './button.module.css'

type StartProps = {
  desc: string;
  onStartClick: () => void;
};

export function Start({ desc, onStartClick }: StartProps) {
  return (
    <button id='btn' className={styles.start} onClick={onStartClick}>
      {desc}
    </button>
  );
}
