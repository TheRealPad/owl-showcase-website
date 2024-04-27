import { TopBar } from "./topBar";
import { Description } from "./description";
import { Progression } from "./progression";
import { Members } from "./members";
import styles from "./styles.module.scss";

function Home() {
  return (
    <div className={styles.app}>
      <TopBar />
      <Description />
      <Members />
      <Progression />
    </div>
  );
}

export { Home };
