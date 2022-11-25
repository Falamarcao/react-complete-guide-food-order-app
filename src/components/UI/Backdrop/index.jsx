import styles from "./Backdrop.module.css";

const Backdrop = (props) => (
  <div className={styles.backdrop} onClick={props.onClick}></div>
);

export default Backdrop;
