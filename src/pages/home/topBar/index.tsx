import styles from "./styles.module.scss";

function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.title}>
        <div className={styles.imageShape}>
          <img className={styles.image} src={"/owl.png"} alt={"owl icon"} />
        </div>
        <p className={styles.name}>OWL</p>
      </div>
      <div className={styles.contact}>
        <a href={"mailto:owlparis.contact@gmail.com"} target="_blank">
          owlparis.contact@gmail.com
        </a>
      </div>
    </div>
  );
}

export { TopBar };
