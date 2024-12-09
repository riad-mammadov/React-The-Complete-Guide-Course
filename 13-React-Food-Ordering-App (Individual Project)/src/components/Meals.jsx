import { useContext } from "react";
import CartContext from "../store/CartContext.jsx";

export default function Meals({ meal }) {
    const cartCtx = useContext(CartContext);

    const imageURL = `http://localhost:3000/${meal.image}`;


    function handleClick() {
        cartCtx.addItem(meal);
    }

    return (
        <article className="meal-item">
            <img src={imageURL} alt={meal.name} />
            <h3>{meal.name}</h3>
            <p className="meal-item-price">£{meal.price}</p>
            <p className="meal-item-description">{meal.description}</p>
            <div className="meal-item-actions">
                <button onClick={handleClick} className="button">Add to cart</button>
            </div>
        </article>
    )
}