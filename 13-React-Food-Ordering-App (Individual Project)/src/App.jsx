import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import Cart from "./components/Cart.jsx";
import Checkout from "./components/Checkout.jsx";

function App() {
  return (
    <main>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <Products />
          <Cart />
          <Checkout />
        </CartContextProvider>
      </UserProgressContextProvider>
    </main>
  );
}

export default App;
