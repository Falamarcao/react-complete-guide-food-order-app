import DUMMY_MEALS from "./dummyMeals";
import styles from "./AvailableMeals.module.css";
import Card from "../../UI/Card";
import MealItem from "../MealItem";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem key={meal.id} {...meal} />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
