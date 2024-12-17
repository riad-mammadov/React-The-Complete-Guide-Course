import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const displayCart = useSelector((state) => state.cart.items);
  return (
    <main>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {displayCart.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.name,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
      </Card>
    </main>
  );
};

export default Cart;
