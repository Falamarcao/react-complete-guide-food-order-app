import { useContext, useEffect, useState } from "react";
import CartContext from "../../../store/cart-context";
import CartIcon from "../../Icons/CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const cartContext = useContext(CartContext);

  const itemsCount = cartContext.items.reduce(
    (previousValue, item) => previousValue + item.amount,
    0
  );

  const buttonStyles = [styles.button, isAnimated && styles.bump].join(" ");

  useEffect(() => {
    if (cartContext.items.length > 0) {
      setIsAnimated(true);
      const timeoutId = setTimeout(() => setIsAnimated(false), 300);
      return () => clearTimeout(timeoutId); // best pratice to clearTimeout
    }
  }, [cartContext.items]);

  return (
    <button className={buttonStyles} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{itemsCount}</span>
    </button>
  );
};

export default HeaderCartButton;
