import { useState } from "react";
import "./App.css";

import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const products = [
    { name: "Fall Limited Edition Sneakers", price: 125.0 },
    { name: "Nike Air Force 1", price: 1250.0 },
    { name: "Nike Air Max 270", price: 1250.0 },
    { name: "Nike Air Jordan 1", price: 1250.0 },
    { name: "Adidas Stan Smith", price: 1250.0 },
    { name: "Adidas Superstar", price: 1250.0 },
    { name: "Adidas Ultraboost", price: 1250.0 },
    { name: "Puma Suede Classic", price: 1250.0 },
    { name: "Puma RS-X", price: 1250.0 },
    { name: "Puma Speedcat", price: 1250.0 },
    { name: "Reebok Club C 85", price: 1250.0 },
    {
      name: "Reebok Classic Leather",
      description: "Chaussure de marque Reebok",
    },
    { name: "Reebok Zig Kinetica", description: "Chaussure de marque Reebok" },
    { name: "Asics Gel-Kayano", description: "Chaussure de marque Asics" },
    { name: "Asics Gel-Nimbus", description: "Chaussure de marque Asics" },
    { name: "Asics Gel-Lyte", description: "Chaussure de marque Asics" },
  ];

  const [cart, setCart] = useState([]);

  function Product({ product, setCart }) {
    const [quantity, setQuantity] = useState(0);

    const addToCart = () => {
      const productToAdd = { ...product, quantity };
      setCart([...cart, productToAdd]);
    };

    return (
      <div>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <div>
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 0)}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button onClick={addToCart}>Ajouter au panier</button>
      </div>
    );
  }

  const CartPage = ({ cart }) => {
    return (
      <div>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li
                style={{
                  display: "flex",
                  listStyle: "none",
                  padding: "10px",
                  margin: "0",
                }}
                key={index}
              >
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price * item.quantity}</p>
                {/* Add any other details you want to display */}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="app">
      <h1>Todo list</h1>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </div>
      <div className="add-task">
        <input
          type="text"
          placeholder="New Task"
          onKeyDown={(e) => e.key === "Enter" && addTask(e.target.value)}
        />
      </div>
      <div>
        <CartPage cart={cart} />
      </div>
      <div>
        {products.map((product) => (
          <Product key={product.name} product={product} setCart={setCart} />
        ))}
      </div>
    </div>
  );
}

export default App;
