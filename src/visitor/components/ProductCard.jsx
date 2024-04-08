import React from 'react';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const navigateToProductDetail = () => {
        navigate(`/product/${product._id}`);
    };

    return (
        <article key={product.id} className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl">
            <button onClick={navigateToProductDetail} >
                <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img src={`http://localhost:4000/images/products/${product.image}`} alt={product.name}/>
                </div>

                <div className="mt-1 p-2">
                    <h2 className="text-slate-700 font-bold">{product.name}</h2>
                    <p className="text-slate-400 mt-1 text-sm font-semibold">{product.description.slice(0, 40)}...</p>

                    <div className="mt-3 flex items-end justify-between">
                        <p>
                            <span className="text-lg font-bold text-orange-500">${product.price}</span>
                        </p>

                        <div className="group inline-flex rounded-xl bg-orange-100 p-2 hover:bg-orange-200">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="group-hover:text-orange-500 h-4 w-4 text-orange-400" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </button>
        </article>
    );

}

export default ProductCard;