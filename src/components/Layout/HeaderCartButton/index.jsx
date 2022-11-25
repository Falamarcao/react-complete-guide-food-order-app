import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../Icons/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  const itemsCount = cartContext.items.reduce(
    (previousValue, item) => previousValue + item.amount,
    0
  );

  return (
    <button className={styles.button} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{itemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
