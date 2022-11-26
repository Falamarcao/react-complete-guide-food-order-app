import { useRef, useState } from "react";
import Input from "../../../UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const amountInputRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const amount = +amountInputRef.current.value; // the plus sign convert string to number

    // enforcing min and max values from input field
    if (amount < 1 || amount > 5) {
      setIsValid(false);
    } else {
      setIsValid(true);
      props.onAdd(amount);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={amountInputRef}
      ></Input>
      <button className={styles.button}>+ Add</button>
      {!isValid && <p>Please enter a valid amount (min 1, max 5).</p>}
    </form>
  );
};

export default MealItemForm;
