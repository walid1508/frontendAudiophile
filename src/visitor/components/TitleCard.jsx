import React from 'react';

const TitleCard = ({title}) => {
    return (
        <div className='bg-noir-1 text-white py-10 '>
            <h1 className='text-3xl font-bold text-center'>{title}</h1>
        </div>
    );
}

export default TitleCard;
