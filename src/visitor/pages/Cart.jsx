import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import { UserContext } from "../../context/userContext";
import axios from "axios";
import PayPal from "../components/PayPal";
import SkeletonLoader from "../components/SkeletonLoader";

export default function Cart() {
    const { cartItems, addToCart, removeFromCart, getCartTotal, clearCart } = useContext(CartContext);
    const { user, isLoading } = useContext(UserContext);


    const deleteAll = async () => {
        clearCart();
    };

    if (isLoading) {
        return <SkeletonLoader />;
    }

    return (
        <div className="max-w-3xl mx-auto my-20">
            <div className="flex flex-col items-center bg-white dark:bg-gray-800 gap-8 p-10 text-black dark:text-white font-normal text-sm rounded-xl shadow-lg">
                {cartItems.length > 0 ? cartItems.map((item) => (
                    <div className="flex justify-between items-center bg-white dark:bg-gray-700 rounded-xl p-4 shadow w-full gap-4" key={item._id}>
                        <img src={`http://localhost:4000/images/products/${item.image}`} alt={item.name} className="rounded-md h-24"/>
                        <div>
                            <h1 className="text-lg font-bold">{item.name}</h1>
                            <p className="text-gray-500 dark:text-gray-400">{item.price}</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <button className="px-4 py-2 bg-gray-200 text-xs font-bold uppercase rounded hover:bg-gray-300 focus:outline-none focus:bg-gray-400" onClick={() => removeFromCart(item)}>-</button>
                            <p>{item.quantity}</p>
                            <button className="px-4 py-2 bg-gray-200 text-xs font-bold uppercase rounded hover:bg-gray-300 focus:outline-none focus:bg-gray-400" onClick={() => addToCart(item)}>+</button>
                        </div>
                    </div>
                )) : <h1 className="text-lg font-bold">Your cart is empty</h1>}
                {cartItems.length > 0 && (
                    <div className="flex flex-col items-center gap-4 w-full">
                        <h1 className="text-xl font-bold">Total: ${getCartTotal()}</h1>
                        <button
                            className="px-10 py-2 rounded-md mx-3 bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 focus:outline-none focus:bg-orange-700"
                            onClick={deleteAll}>Empty cart
                        </button>
                    </div>
                )}
            </div>
            <div className="my-3 px-5 flex justify-end">
                {cartItems.length > 0 && (
                    user ? (<>
                        <PayPal/>
                    </>) : <p className="text-center text-lg font-bold">Please login to proceed to checkout</p>
                )}
            </div>
        </div>
    );
}
