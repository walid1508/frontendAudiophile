import { useContext, useEffect, useState } from 'react';
import { CartContext } from "../../context/cart";

const ProductCardDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [productToCart, setProductToCart] = useState({});
    const { addToCart } = useContext(CartContext);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    };

    useEffect(() => {
        setProductToCart({
            ...product,
            quantity: quantity
        });
    }, [quantity, product]);

    const handleAddToCart = () => {
        setIsLoading(true);
        setTimeout(() => {
            addToCart(productToCart);
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div>
            <li key={product._id} className="xx99-headphones-black-section p-10 bg-white rounded-xl mt-0">
                <div>
                    <img src={`http://localhost:4000/images/products/` + product.image} alt="" className="w-full rounded-lg xx99-headphones-black " id="xx99-headphones-black-desktop" />
                </div>

                <div className="xx99-description-section">
                    <h3 className="xx99-title-2">
                        {product.name}
                    </h3>
                    <p className="xx99-content">{product.description}</p>
                    <p className="product-detail-price my-10">
                        {product.price && !isNaN(product.price)
                            ? product.price.toLocaleString('fr-FR', { style: 'currency', currency: 'CAD' })
                            : 'Price not available'}
                    </p>
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center bg-gray-100 text-black">
                            <button onClick={decrementQuantity} className="px-2 py-3 text-lg font-semibold bg-gray-100 hover:bg-gray-200">-</button>
                            <span className="px-2 py-3 text-lg font-semibold">{quantity}</span>
                            <button onClick={incrementQuantity} className="px-2 py-3 text-lg font-semibold bg-gray-100 hover:bg-gray-200">+</button>
                        </div>
                        <button
                            onClick={handleAddToCart}
                            className="rounded-xl bg-orange-500 text-sm text-white uppercase px-8 py-4 shadow hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50"
                            disabled={isLoading}
                        >
                            {isLoading ? "Adding to cart..." : "Add to Cart"}
                        </button>
                    </div>
                </div>
            </li>
        </div>
    );
};

export default ProductCardDetail;
