import React from 'react';

const PriceCart = ({price}) => {
    return (
        <div>
            <h2>
                <span className='text-5xl font-extrabold text-purple-600'>{price.price}</span>
                 <span className='font-semibold'>/manth</span>
            </h2>
        </div>
    );
};

export default PriceCart;