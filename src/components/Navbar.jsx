import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__left">
        <ul>
          <li>
            <img
              src="../../ecommerce-product-page-main/images/logo.svg"
              alt="logo Sneakers"
            />
          </li>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navBar__right">
        <img
          className="icon-cart"
          src="../../ecommerce-product-page-main/images/icon-cart.svg"
          alt="Icon Cart"
        />
        <img
          className="profil"
          src="../../ecommerce-product-page-main/images/image-avatar.png"
          alt="Photo de profil Avatar"
        />
      </div>
    </div>
  );
};

export default NavBar;
