import React from 'react';
import { Helmet } from "react-helmet";
import Credit from "../components/Credit";
import CategorieNav from "../components/CategorieNav";
import ProductCard from "../components/ProductCard";
import TitleCard from '../components/TitleCard';
import { useNavigate } from "react-router-dom";
 
const Speakers = ({ products }) => {
 
    console.log(products)
    const speakers = products.filter(product => product.category === 'Speakers');
    const navigate = useNavigate();
 
    const navigateHeadphone = () => {
        navigate('/Speakers')
    }
 
    return (
        <div className="text-3xl font-extralight text-center">
            <Helmet>
                <title>Audiophile | Speakers</title>
                <meta name="description" content="Speakers page" />
            </Helmet>
            <TitleCard title={"SPEAKERS"} />
            {speakers.map(speaker => (
                <div className="space-between-component" key={speaker._id}>
                    <ProductCard product_id={speaker._id}
                        product_name={speaker.name}
                        product_image={`http://localhost:4000/images/products/` + speaker.image}
                        product_description={speaker.description}
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
 
export default Speakers;
