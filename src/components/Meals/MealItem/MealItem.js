import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, description, price }) => {
  const { addItem } = useContext(CartContext);

  const formattedPrice = `$${price.toFixed(2)}`;

  const addtoCartHandler = (amount) => {
    addItem({ id: id, name: name, amount: amount, price: price });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <MealItemForm id={id} onAddtoCart={addtoCartHandler} />
    </li>
  );
};

export default MealItem;
