import { useContext } from 'react'
import img from '../assets/logo.jpg'
import CartContext from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {
    const cartCtx = useContext(CartContext);
    const progressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity
    }, 0);

    function handleShowCart() {
        progressCtx.showCart()
    }
    return (
        <header id="main-header">
            <h1 id="title">
                <img src={img} alt="" />
                ReactFood
            </h1>
            <button onClick={handleShowCart} className='text-button'>Cart ({totalCartItems})</button>
        </header>
    )
}