import { members } from "./member.ts";
import styles from "./styles.module.scss";

function Members() {
  return (
    <div className={styles.members}>
      <h1 className={styles.title}>Notre équipe</h1>
      <div className={styles.list}>
        {members.map((member) => (
          <div className={styles.member}>
            <img
              className={styles.icon}
              src={member.image_url}
              alt={"Profile icon"}
            />
            <div className={styles.description}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.job}>{member.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Members };
