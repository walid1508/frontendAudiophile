import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {data} from "autoprefixer";
import GoBack from "../components/GoBack";
import ProductCardDetail from "../components/ProductCardDetail";
import TitleCard from "../components/TitleCard";
import CategorieNav from "../components/CategorieNav";

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error(error));
    }, [id]);

    if (!product) return <div>Loading...</div>;

    console.log(product)

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-32">
            <GoBack/>


            <ProductCardDetail product={product}/>


            <div className="flex flex-col md:flex-row justify-between gap-20">
                <div className="md:w-3/4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">FEATURES</h2>
                    <p className="text-gray-600 mb-4">
                        {product.features}
                    </p>
                </div>

                <div className="md:w-1/4 mt-8 md:mt-0">
                    <h2 className="text-2xl font-bold mb-4">IN THE BOX</h2>
                    <div className="rounded-lg">
                        <ul className="">
                            {product.includes.map((include, index) => (
                                <li key={index}>
                                    <span className="text-orange-500 pr-3">{include.quantity}x</span>
                                    <span>{include.item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>


            <div className="flex justify-center items-center my-10">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <div className="row-span-2">
                        <img src={`http://localhost:4000/images/products/` + product.gallery[0]} alt="Description"
                             className="w-full h-full object-cover rounded-lg"/>
                    </div>
                    <div>
                        <img src={`http://localhost:4000/images/products/` + product.gallery[1]} alt="Description"
                             className="w-full h-full object-cover rounded-lg bg-red-500"/>
                    </div>
                    <div>
                        <img src={`http://localhost:4000/images/products/` + product.gallery[2]} alt="Description"
                             className="w-full h-full object-cover rounded-lg"/>
                    </div>
                </div>
            </div>

            <CategorieNav />

        </div>
    );
};

export default ProductDetail;
