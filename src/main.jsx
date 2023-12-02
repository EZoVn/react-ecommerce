import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NavBar from "./components/Navbar.jsx";
import ProductPage from "./components/ProductPage.jsx";
import { CartProvider } from "./components/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <NavBar />
      <ProductPage />
    </CartProvider>
    <App />
  </React.StrictMode>
);
