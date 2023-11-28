import { useState } from "react";
import "./navBar.css";

const NavBar = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  // const handleClickCart = () => {
  //   setIsCartVisible(!isCartVisible);
  // };

  return (
    <div className="navBar">
      <div className="navBar__left">
        <ul>
          <li>
            <img src="./images/logo.svg" alt="logo Sneakers" />
          </li>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navBar__right">
        {/* <div className="cart" onClick={handleClickCart}> */}
        <div className="cart" onClick={() => setIsCartVisible(!isCartVisible)}>
          <img
            className="icon-cart"
            src="./images/icon-cart.svg"
            alt="Icon Cart"
          />
          {isCartVisible && (
            <div className="cart__visible">
              <h2>Cart</h2>
              {/*Article Panier */}
            </div>
          )}
          <div className="hidden"></div>
        </div>
        <div>
          <img
            className="profil"
            src="./images/image-avatar.png"
            alt="Photo de profil Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
