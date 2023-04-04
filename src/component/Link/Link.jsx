import React from 'react';

const Link = ({link}) => {
    return (
        <li className='pr-12 hover:bg-gray-400 px-4 py-2 rounded-2xl'>
            <a href={link.path}>{link.name}</a>
        </li>
    );
};

export default Link;