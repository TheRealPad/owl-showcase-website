import styles from "./styles.module.scss";

function Progression() {
  return (
    <div className={styles.progression}>
      <h1 className={styles.title}>Progression</h1>
      <div className={styles.list}>
        <div className={styles.content}>
          <p>Septembre 2022: Naissance du projet</p>
          <p>Decembre 2022: POC</p>
          <p>Avril 2023: Fondation techniques</p>
          <p>Juillet 2023: Premières fonctionnalités</p>
          <p>Novembre 2023: Fonctionnalités clés</p>
          <p>Septembre 2024: BETA Pro</p>
          <p>Decembre 2024: Beta</p>
        </div>
      </div>
    </div>
  );
}

export { Progression };
