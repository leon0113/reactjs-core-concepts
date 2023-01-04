import logo from "./logo.svg";
import "./App.css";

const number = 555;
const singer = {
  name: "Leon",
  age: 24,
  address: "KHULNA",
};

function App() {
  return (
    <div className="App">
      <div className="container">
        <h3>Hello!</h3>
      </div>
      <div className="music">
        <p>Name : {number + 2}</p>
        <p>Age : {singer.age}</p>
        <p style={{ color: "blue", backgroundColor: "black" }}>
          Address : {singer.address}
        </p>
      </div>
    </div>
  );
}

export default App;
