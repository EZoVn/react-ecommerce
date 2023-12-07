import { useContext, useState } from "react";
import "./navBar.css";
import { CartContext } from "./CartContext.jsx";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  return (
    <div className="cart">
      <img
        onClick={() => setIsCartVisible(!isCartVisible)}
        className="icon-cart"
        src="./images/icon-cart.svg"
        alt="Icon Cart"
      />
      {/* regler laffichage si length > 0 */}
      <span className="cart__nbrArticle">{cart.length}</span>
      {isCartVisible && (
        <div className="cart__visible">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li className="cart__visible--li" key={index}>
                  <div className="cart__visible--list">
                    <img
                      className="cart__visible--img"
                      src={item.image}
                      alt="photo du produit"
                    />
                    <p>
                      {item.name}
                      <br />${item.price} x {item.quantity}
                      <strong> ${item.price * item.quantity}</strong>
                    </p>
                    <img
                      className="cart__visible--delete"
                      src="./images/icon-delete.svg"
                      alt="icon delete"
                    />
                  </div>
                  <button className="button">Checkout</button>
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
