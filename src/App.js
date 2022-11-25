import Header from "./components/Layout/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [IsCartVisibile, setIsCartVisibile] = useState(false);
  const handleClick = () => setIsCartVisibile((prevState) => !prevState);

  return (
    <>
      {IsCartVisibile ? <Cart onClose={handleClick} /> : null}
      <Header onClickCart={handleClick} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
