import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
  const [btnPressed, setBtnPressed] = useState(false);
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce(
    (currNumber, item) => currNumber + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${btnPressed ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnPressed(true);

    const timer = setTimeout(() => {
      setBtnPressed(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
