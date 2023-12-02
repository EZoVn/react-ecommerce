import "./navBar.css";
import Cart from "./Cart";

const NavBar = () => {
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
        <Cart />
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
