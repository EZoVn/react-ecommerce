import { useContext, useState } from "react";
import "./productPage.css";
import { CartContext } from "./CartContext.jsx";

// import { Swiper, SwiperSlide } from "swiper/react";
import ThumbnailCarousel from "./Thumbnails.jsx";

const ProductPage = () => {
  // const [activeThumb, setActiveThumb] = useState(null);

  const products = [
    {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      image: "../images/image-product-1-thumbnail.jpg",
      price: 125.0,
      oldPrice: 250.0,
      reduction: "25%",
    },
    {
      id: 2,
      name: "Fall Limited Edition Sneakers 2",
      image: "../images/image-product-3-thumbnail.jpg",
      price: 250.0,
      oldPrice: 500.0,
      reduction: "50%",
    },
  ];

  function Product({ product }) {
    const { cart, setCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(0);

    const addToCart = () => {
      if (quantity > 0) {
        const existingIndex = cart.findIndex((item) => item.id === product.id);
        console.log(existingIndex);
        if (existingIndex !== -1) {
          const updateCart = [...cart];
          updateCart[existingIndex].quantity += quantity;
          console.log("existing index");
          setCart(updateCart);
        } else {
          const productToAdd = { ...product, quantity };
          setCart([...cart, productToAdd]);
          console.log("Cart Updated with new product:", cart);
        }
      }
    };

    return (
      <div className="addCart">
        <div className="addCart__container">
          <button
            className="addCart__button--quantity"
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 0)}
          >
            <img src="./images/icon-minus.svg" alt="icon minus" />
          </button>
          <span>{quantity}</span>
          <button
            className="addCart__button--quantity"
            onClick={() => setQuantity(quantity + 1)}
          >
            <img src="./images/icon-plus.svg" alt="icon plus" />
          </button>
        </div>
        <div className="addCart__actions">
          <button
            className="button addCart__button--addToCart"
            onClick={addToCart}
          >
            <img src="./images/icon-cart.svg" alt="icon cart" />
            Add to cart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="product__page">
      <ThumbnailCarousel />
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
      </div>
    </div>
  );
};

export default ProductPage;
