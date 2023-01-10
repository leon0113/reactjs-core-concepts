import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  );
}

//  Product component

// const products = [
//   { name: "laptop", price: 40000 },
//   { name: "phone", price: 15000 },
//   { name: "watch", price: 3000 },
//   { name: "Ipad", price: 20000 },
//   { name: "Car", price: 30200 },
// ];

// {products.map((product) => (
//   <Product name={product.name} price={product.price}></Product>
// ))}
// {/* <Product name="laptop" price="25000"></Product>
// <Product name="phone" price="15000"></Product> */}

// function Product(props) {
//   return (
//     <div className="product">
//       <h3>Name : {props.name} </h3>
//       <p>Price : {props.price}</p>
//     </div>
//   );
// }

export default App;
