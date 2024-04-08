import React from 'react';
import { Helmet } from "react-helmet";
import Credit from "../components/Credit";
import CategorieNav from "../components/CategorieNav";
import TitleCard from '../components/TitleCard';
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const Headphones = ({ products }) => {

    console.log( "products....",products)
    const headphones = products.filter(product => product.category === 'Headphones');
    const navigate = useNavigate();


    return (
        <>
            <Helmet>
                <title>Audiophile | Headphones</title>
                <meta name="description" content="Headphones page"/>
            </Helmet>
            <TitleCard title={"HEADPHONES"}/>
            <div className='flex flex-col justify-center container mx-auto px-4 md:px-8 lg:px-32'>
                <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        headphones.map(product => (
                            <ProductCard product={product}/>
                        ))
                    }
                </div>
            </div>
            <div className="space-between-component">
                <CategorieNav/>
            </div>

            <div className="space-between-component">
                <Credit/>
            </div>
        </>
    )
        ;
};

export default Headphones;