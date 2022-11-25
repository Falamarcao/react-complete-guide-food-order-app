import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [IsCartVisibile, setIsCartVisibile] = useState(false);
  const handleClick = () => setIsCartVisibile((prevState) => !prevState);

  return (
    <CartProvider>
      {IsCartVisibile ? <Cart onClose={handleClick} /> : null}
      <Header onClickCart={handleClick} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
