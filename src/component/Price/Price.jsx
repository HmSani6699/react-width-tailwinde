import { useEffect, useState } from "react";
import PriceCart from "../PriceCart/PriceCart";

const Price = () => {
  const [prices, setPrices] = useState([]);
  useEffect(() => {
    fetch("price.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);
  return (
    <div className="mx-4 my-8">
      <h1 className="p-4 text-5xl font-bold text-center bg-purple-300">
        Awsome price list
      </h1>
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {prices.map((price) => (
          <PriceCart key={price.id} price={price}></PriceCart>
        ))}
      </div>
    </div>
  );
};

export default Price;
