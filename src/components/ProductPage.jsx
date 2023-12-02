import { useContext, useState } from "react";
import "./productPage.css";
import { CartContext } from "./CartContext.jsx";
const ProductPage = () => {
  const productImages = [
    "../images/image-product-1.jpg",
    "../images/image-product-1.jpg",
    "../images/image-product-2.jpg",
    "../images/image-product-3.jpg",
    "../images/image-product-4.jpg",
  ];

  const products = [
    {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      price: 125.0,
      oldPrice: 250.0,
    },
    {
      id: 2,
      name: "Fall Limited Edition Sneakers 2",
      price: 250.0,
      oldPrice: 500.0,
      reduction: "50%",
    },
  ];

  function Product({ product }) {
    const { cart, setCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const addToCart = () => {
      const productToAdd = { ...product, quantity };
      setCart([...cart, productToAdd]);
      console.log("Cart Updated:", cart);
    };

    return (
      <div className="addCart">
        <button
          className="addCart--quantity"
          onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 0)}
        >
          <img src="./images/icon-minus.svg" alt="icon minus" />
        </button>
        <span>{quantity}</span>
        <button
          className="addCart--quantity"
          onClick={() => setQuantity(quantity + 1)}
        >
          <img src="./images/icon-plus.svg" alt="icon plus" />
        </button>
        <button className="addToCart" onClick={addToCart}>
          <img src="./images/icon-cart.svg" alt="icon cart" />
          Add to cart
        </button>
      </div>
    );
  }

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
        <h1 className="product__info--title">Sneaker Company</h1>

        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <p className="price">
              ${product.price}
              <span className="reduction">50%</span>
            </p>
            <p className="oldPrice">${product.oldPrice}</p>
            <Product product={product} />
          </div>
        ))}

        {/* <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <p className="price">
          $125.00 <span className="reduction">50%</span>
        </p>
        <p className="oldPrice">$250.00</p> */}
        {/* </div> */}
        {/* <h2>Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <p className="price">
          $125.00 <span className="reduction">50%</span>
        </p>
        <p className="oldPrice">$250.00</p> */}
        {/* <Product /> */}
      </div>
    </div>
  );
};

export default ProductPage;
