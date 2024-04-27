import styles from "./styles.module.scss";

function Description() {
  return (
    <div>
      <h1 className={styles.title}>Notre solution</h1>
      <p className={styles.content}>
        OWL est une application mobile à destination des conducteurs, elle les
        assiste pour rester concentré sur la route. Notre application utilise
        les capteursintégrés dans les montres connectées comme le capteur
        cardiaque, l'accéléromètre, le taux d'oxygène dans le sang pour aider
        les utilisateursà rester concentrés sur la route.
      </p>
    </div>
  );
}

export { Description };
