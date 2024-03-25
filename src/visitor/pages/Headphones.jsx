import React from 'react';
import { Helmet } from "react-helmet";
import Credit from "../components/Credit";
import CategorieNav from "../components/CategorieNav";
import ProductCard from "../components/ProductCard";
import TitleCard from '../components/TitleCard';
import { useNavigate } from "react-router-dom";

const Headphones = ({ products }) => {

    console.log(products)
    const headphones = products.filter(product => product.category === 'Headphones');
    const navigate = useNavigate();

    const navigateHeadphone = () => {
        navigate('/headphones')
    }

    return (
        <div className="text-3xl font-extralight text-center">
            <Helmet>
                <title>Audiophile | Headphones</title>
                <meta name="description" content="Headphones page" />
            </Helmet>
            <TitleCard title={"HEADPHONES"} />
            {headphones.map(headphone => (
                <div className="space-between-component">
                    <ProductCard product_id={headphone._id}
                        product_name={headphone.name}
                        product_image={`http://localhost:4000/images/products/` + headphone.image}
                        product_description={headphone.description}
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

export default Headphones;