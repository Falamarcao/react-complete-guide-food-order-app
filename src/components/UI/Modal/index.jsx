import ReactDOM from "react-dom";
import Backdrop from "../Backdrop";
import ModalOverlay from "./ModalOverlay";

const Modal = (props) => {
  const overlay = document.getElementById("overlays");

  return ReactDOM.createPortal(
    <>
      <Backdrop onClick={props.onClose} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </>,
    overlay
  );
};

export default Modal;
