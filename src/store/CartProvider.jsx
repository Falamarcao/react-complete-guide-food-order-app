import CartContext from "./cart-context";

const CartProvider = (props) => {
  const handleAddItem = (item) => {};

  const handleRemoveItem = (itemId) => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
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
