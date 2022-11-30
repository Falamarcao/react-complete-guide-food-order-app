import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  

  if (action.type === "ADD_ITEM") {
    // copy current state to ensure integrity
    const items = [...state.items];

    const totalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // check if element is already in the cart - return -1 or id
    const itemId = items.findIndex((item) => item.id === action.item.id);

    if (itemId !== -1) {
      items[itemId].amount += action.item.amount;
    } else {
      items.push(action.item);
    }

    return { items: items, totalAmount: totalAmount };
  } else if (action.type === "REMOVE_ITEM") {
    // copy current state to ensure integrity
    const items = [...state.items];

    const itemId = items.findIndex((item) => item.id === action.itemId);

    const totalAmount = state.totalAmount - items[itemId].price;

    if (items[itemId].amount === 1) {
      items.splice(itemId, 1);
    } else {
      items[itemId].amount -= 1;
    }

    return { items: items, totalAmount: totalAmount };
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
