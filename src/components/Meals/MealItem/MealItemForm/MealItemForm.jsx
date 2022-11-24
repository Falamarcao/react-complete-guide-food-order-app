import Input from "../../../UI/Card/Input/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = () => {
  return (
    <form className={styles.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button className={styles.button}>+ Add</button>
    </form>
  );
};

export default MealItemForm;