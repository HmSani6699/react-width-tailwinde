import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
    return (
        <div className='bg-emerald-500 rounded-lg p-6 '>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold text-purple-600'>{price.price}</span>
                 <span className='font-semibold text-white'>/manth</span>
            </h2>
            <h1 className='text-4xl  font-bold text-center mt-4'>{price.name}</h1>
            <p className='text-2xl font-bld underline text-white'>Feature</p>
            {
                price.feature.map((feature,id)=><Feature
                key={id}
                feature={feature}
                ></Feature>)
            }
        </div>
    );
};

export default PriceCart;