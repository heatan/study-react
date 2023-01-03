import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Links } from "./Links";
import { Headline } from "./Headline";

export function Main(props) {
  return (
    <>
      <main className={styles.main}>
        <Headline
          page={props.page}
        >
          <code className={styles.code}>pages/{props.page}</code>
        </Headline>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <Links />
      </main>
    </>
  );
}
