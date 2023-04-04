import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Price from "./component/Price/Price";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
    <Navbar></Navbar>
      <h1 className="text-4xl text-purple-600 font-bold">hallo from tailwind </h1>
      <Price></Price>
    </div>
  );
}

export default App;
