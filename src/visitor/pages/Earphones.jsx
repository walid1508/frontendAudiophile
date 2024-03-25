import React from 'react';
import {Helmet} from "react-helmet";
import Credit from "../components/Credit";
import CategorieNav from "../components/CategorieNav";
import ProductCard from "../components/ProductCard";
import TitleCard from '../components/TitleCard';
import { useNavigate } from "react-router-dom";

const Earphones = ({products}) => {


    console.log( "products....",products)
    const earphones = products.filter(product => product.category === 'Earphones');
    const navigate = useNavigate();

    const navigateHeadphone = () => {
        navigate('/earphones')
    }

   
    return (
        <div className="text-3xl font-extralight text-center">
            <Helmet>
                <title>Audiophile | Headphones</title>
                <meta name="description" content="Headphones page" />
            </Helmet>
            <TitleCard title={"EARPHONES"} />
            {earphones.map(earphone => (
                <div className="space-between-component">
                    <ProductCard product_id={earphone._id}
                        product_name={earphone.name}
                        product_image={`http://localhost:4000/images/products/` + earphone.image}
                        product_description={earphone.description}
                        navigateHeadphone={navigateHeadphone} />
                </div>

            ))}
            <div className="space-between-component">
                <CategorieNav />
            </div>

            <div className="space-between-component">
                <Credit />
            </div>
        </div>
    );
};

export default Earphones;