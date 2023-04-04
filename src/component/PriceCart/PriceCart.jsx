import React from 'react';

const PriceCart = ({price}) => {
    console.log(price)
    return (
        <div>
        <h2>{price.name}</h2>
        </div>
    );
};

export default PriceCart;