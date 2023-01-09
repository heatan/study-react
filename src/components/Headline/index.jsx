import classes from "src/components/Headline/Headline.module.css";
import { Footer } from "src/components/Footer";

export function Headline(props) {
  return (
    <div>
      <h1 className={classes.title}>{props.page} Page</h1>
      <div className={classes.description}>
        <p>Get started by editing&nbsp; {props.children}</p>
        <Footer />
      </div>
    </div>
  );
}
