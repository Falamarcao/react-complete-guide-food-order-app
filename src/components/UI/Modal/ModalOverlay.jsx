import styles from "./ModalOverlay.module.css";

const ModalOverlay = (props) => (
  <div className={styles.modal}>
    <div className={styles.content}>{props.children}</div>
  </div>
);

export default ModalOverlay;
