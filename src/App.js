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
      <Person></Person>
      <Person></Person>
      <Person1></Person1>
      <Person1></Person1>
      <h4>New Components :</h4>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return <h1>Shakib Al Hasan</h1>;
}

function Person1() {
  return (
    <div className="person">
      <h1>Steve Smith</h1>
      <p>Cricketer,Australia</p>
    </div>
  );
}

function Friend() {
  return (
    <div className="person">
      <h3> Name : Leon</h3>
      <p>Age : 24</p>
    </div>
  );
}

export default App;
