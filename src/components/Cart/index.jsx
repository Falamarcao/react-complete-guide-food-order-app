import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      <CartContext.Consumer>
        {(cart) => cart.items.map((item) => <li key={item.id}>{item.name}</li>)}
      </CartContext.Consumer>
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>
          <CartContext.Consumer>
            {(cart) => cart.totalAmount.toFixed(2)}
          </CartContext.Consumer>
        </span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
