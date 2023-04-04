import React from "react";
import Feature from "../Feature/Feature";

const PriceCart = ({ price }) => {
  return (
    <div className="bg-emerald-500 rounded-lg p-6 flex flex-col">
      <h2 className="text-center">
        <span className="text-5xl font-extrabold text-purple-600">
          {price.price}
        </span>
        <span className="font-semibold text-white">/manth</span>
      </h2>
      <h1 className="text-4xl  font-bold text-center mt-4">{price.name}</h1>
      <p className="text-2xl font-bld underline text-white mb-4 mt-4">
        Feature
      </p>
      <div className="mb-8">
        {price.feature.map((feature, id) => (
          <Feature key={id} feature={feature}></Feature>
        ))}
      </div>
      <button className=" mt-auto w-full px-4 py-2 rounded-2xl bg-purple-800">
        Cart details
      </button>
    </div>
  );
};

export default PriceCart;
