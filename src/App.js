import "./App.css";

function App() {
  const products = [
    { name: "laptop", price: 40000 },
    { name: "phone", price: 15000 },
    { name: "watch", price: 3000 },
    { name: "Ipad", price: 20000 },
    { name: "Car", price: 30200 },
  ];

  return (
    <div className="App">
      {products.map((product) => (
        <Product name={product.name} price={product.price}></Product>
      ))}
      {/* <Product name="laptop" price="25000"></Product>
      <Product name="phone" price="15000"></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h3>Name : {props.name} </h3>
      <p>Price : {props.price}</p>
    </div>
  );
}

export default App;
,