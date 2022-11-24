import DUMMY_MEALS from "./dummyMeals";
import styles from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return (
    <section className={styles.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
