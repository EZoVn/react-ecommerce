import { useState } from "react";
import "./productPage.css";

const ProductPage = () => {
  const productImages = [
    "../images/image-product-1.jpg",
    "../images/image-product-1.jpg",
    "../images/image-product-2.jpg",
    "../images/image-product-3.jpg",
    "../images/image-product-4.jpg",
  ];

  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    setQuantity(quantity + 1);
    // si la quantity est a 0 break function
  };
  const lessQuantity = () => {
    setQuantity(quantity - 1);
  };
  return (
    <div className="product__page">
      <div className="product__page-images">
        <img
          className="main-image"
          src={productImages[0]}
          alt="image produit"
        />
        <div className="thumbnail-container">
          {productImages.slice(1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image produit ${index + 1}`}
              className="thumbnail"
            />
          ))}
        </div>
      </div>
      <div className="product__info">
        <h1>Sneaker Company</h1>
        <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <p className="price">
          $125.00 <span className="reduction">50%</span>
        </p>
        <p className="oldPrice">$250.00</p>
        <div className="addCart">
          <button onClick={lessQuantity}>
            <img src="./images/icon-minus.svg" alt="icon minus" />
          </button>
          <span>{quantity}</span>
          <button onClick={addQuantity}>
            <img src="./images/icon-plus.svg" alt="icon plus" />
          </button>
          <button className="addToCart">
            <img src="./images/icon-cart.svg" alt="icon cart" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
