import { useContext, useState } from "react";
import "./navBar.css";
import { CartContext } from "./CartContext.jsx";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <div className="cart" onClick={() => setIsCartVisible(!isCartVisible)}>
      <img className="icon-cart" src="./images/icon-cart.svg" alt="Icon Cart" />
      {isCartVisible && (
        <div className="cart__visible">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt="photo du produit" />
                  <p>{item.name}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price * item.quantity}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
