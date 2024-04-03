import { useContext } from 'react';
import { CartContext } from '../../context/cart';

export default function Cart() {
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);

    return (
        <div className="flex flex-col items-center bg-white dark:bg-gray-800 gap-8 p-10 text-black dark:text-white font-normal text-sm rounded-lg shadow-lg max-w-3xl mx-auto my-20">
            <div className="flex flex-col gap-4 w-full">
                {cartItems.map((item) => (
                    <div className="flex justify-between items-center bg-white dark:bg-gray-700 rounded-lg p-4 shadow" key={item._id}>
                        <div className="flex gap-4">
                            <img src={`http://localhost:4000/images/products/${item.image}`} alt={item.name} className="rounded-md h-24" />
                            <div className="flex flex-col justify-center">
                                <h1 className="text-lg font-bold">{item.name}</h1>
                                <p className="text-gray-500 dark:text-gray-400">{item.price}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button
                                className="px-4 py-2 bg-gray-200 text-xs font-bold uppercase rounded hover:bg-gray-300 focus:outline-none focus:bg-gray-400"
                                onClick={() => removeFromCart(item)}
                            >
                                -
                            </button>
                            <p>{item.quantity}</p>
                            <button
                                className="px-4 py-2 bg-gray-200 text-xs font-bold uppercase rounded hover:bg-gray-300 focus:outline-none focus:bg-gray-400"
                                onClick={() => addToCart(item)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {
                cartItems.length > 0 ? (
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="text-xl font-bold">Total: ${getCartTotal()}</h1>
                        <div className="flex gap-4">
                            <button
                                className="px-6 py-3 bg-red-500 text-white text-xs font-bold uppercase rounded hover:bg-red-600 focus:outline-none focus:bg-red-600"
                                onClick={() => clearCart()}
                            >
                                Clear cart
                            </button>
                            <button
                                className="px-6 py-3 bg-orange-500 text-white text-xs font-bold uppercase rounded hover:bg-orange-600 focus:outline-none focus:bg-blue-600"
                                onClick={() => {}}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                ) : (
                    <h1 className="text-lg font-bold">Your cart is empty</h1>
                )
            }
        </div>
    );
}
