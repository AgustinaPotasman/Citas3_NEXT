import styles from "./input.module.css";

export default function Input({iType , iPlaceholder , iLabel, iName}) {
    return (
      <>
        <div className={styles.container}>
            <label className={styles.label}>{iLabel}</label>
            <input className={styles.input} type={iType} name={iName} placeholder={iPlaceholder}></input>
          </div>
      </>
    );
  }
  