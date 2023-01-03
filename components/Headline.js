import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";

export function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>{props.page} Page</h1>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp; {props.children}
        </p>
        <Footer />
      </div>
    </div>
  );
}
