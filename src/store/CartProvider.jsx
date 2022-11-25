import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const items = state.items.concat(action.item); // concat add item to a array by creating a new array.
    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return { items: items, totalAmount: totalAmount };
  } else if (action.type === "DELETE_ITEM") {
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const handleAddItem = (item) =>
    dispatchCart({ type: "ADD_ITEM", item: item });

  const handleRemoveItem = (itemId) =>
    dispatchCart({ type: "REMOVE_ITEM", itemId: itemId });

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
