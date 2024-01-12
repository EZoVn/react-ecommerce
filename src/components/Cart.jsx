import { useContext, useState } from "react";
import "../assets/navbar.css";
import { CartContext } from "./CartContext.jsx";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const removeArticle = (index) => {
    const newCart = [...cart];
    console.log("cart : ", newCart, "index", index);
    newCart.splice(index, 1);
    setCart(newCart);
  };

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
                    <button onClick={() => removeArticle(index)}>
                      <img
                        className="cart__visible--delete"
                        src="./images/icon-delete.svg"
                        alt="icon delete"
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="flex">
            <button className="button checkout">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
