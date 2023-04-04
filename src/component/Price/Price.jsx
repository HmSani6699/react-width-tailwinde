import { useEffect, useState } from "react";
import PriceCart from "../PriceCart/PriceCart";

const Price = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("price.json")
    .then(res=>res.json())
    .then(data=>console.log(data))
  }, []);
  return (
    <div>
      <h1 className="p-4 text-5xl font-bold text-center bg-purple-300">
        Awsome price list
      </h1>
      <div></div>
    </div>
  );
};

export default Price;
