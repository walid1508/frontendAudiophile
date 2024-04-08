import React from 'react';
import ProductCard from '../components/ProductCard';
import {Helmet} from "react-helmet";
import TitleCard from "../components/TitleCard";



const Catalogue = ({products}) => {
    return (

    <>
        <Helmet>
            <title>Audiophile | Catalogue</title>
            <meta name="description" content="Catalogue page"/>
        </Helmet>
        <TitleCard title={"CATALOGUE"}/>
        <div className='flex flex-col justify-center  container mx-auto px-4 md:px-8 lg:px-32'>
            <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => (
                        <ProductCard product={product}/>
                    ))
                }
            </div>
        </div>
    </>
)
    ;
};

export default Catalogue;