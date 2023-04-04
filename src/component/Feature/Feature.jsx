import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid';

const Feature = ({feature}) => {
    console.log(feature)
    return (
        <div>
           <span>{feature}</span>
           <BeakerIcon className="h-6 w-6 text-blue-500" />
        </div>
    );
};

export default Feature;