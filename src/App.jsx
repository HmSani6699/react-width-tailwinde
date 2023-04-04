import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Price from "./component/Price/Price";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <Navbar></Navbar>
      <Price></Price>
    </div>
  );
}

export default App;
