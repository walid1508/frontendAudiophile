import React, {useContext, useEffect, useRef} from 'react';
import { CartContext } from '../../context/cart';
import { UserContext } from "../../context/userContext";
import axios from "axios";
import PayPal from "../components/PayPal";
import SkeletonLoader from "../components/SkeletonLoader";
import { useNavigate } from "react-router-dom";

export default function Cart() {
    const { cartItems, addToCart, removeFromCart, getCartTotal, clearCart } = useContext(CartContext);
    const { user, isLoading } = useContext(UserContext);
    const paypal = useRef();
    const navigate = useNavigate();


    const deleteAll = async () => {
        clearCart();
    };

    useEffect(() => {
        if (window.paypal && paypal.current && !paypal.current.hasChildNodes()) {
            window.paypal.Buttons({
                style: {
                    layout: 'horizontal',
                    color: 'gold',
                    shape: 'rect',
                    size: 'large',
                    label: 'pay',
                },
                createOrder: (data, actions, err) => {
                    const total = getCartTotal().toString();

                    return actions.order.create({
                        intent: "CAPTURE",
                        purchase_units: [{
                            description: "Items from your cart",
                            amount: {
                                currency_code: "CAD",
                                value: total,
                                breakdown: {
                                    item_total: {
                                        currency_code: "CAD",
                                        value: total,
                                    }
                                }
                            },
                            items: cartItems.map(item => ({
                                name: item.name,
                                unit_amount: {
                                    currency_code: "CAD",
                                    value: item.price.toString(),
                                },
                                quantity: item.quantity.toString(),
                            })),
                        }],
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    console.log(order);

                    const productsFromCart = cartItems.map(item => ({
                        quantity: item.quantity,
                        item: item.name,
                        price: item.price,
                    }));

                    console.log(order);
                    console.log(productsFromCart);

                    const totalAmount = getCartTotal();
                    const userId = user?.id;

                    console.log('User :', userId);

                    const address = '1234 Main St, Montreal, QC, H3Z 2Y7'


                    console.log('Total amount:', totalAmount);
                    console.log('User ID:', userId);
                    console.log('Address:', address);

                    axios.post('http://localhost:4000/sales', {
                        product: productsFromCart,
                        totalAmount,
                        userId,
                        address,
                    }).then(res => {
                        navigate('/confirmation');
                        clearCart();
                        console.log('Suis dans le then');
                    }).catch(error => {
                        console.error('Error: ', error);
                    });

                    clearCart();
                },
            }).render(paypal.current);
        }
    }, [cartItems, getCartTotal, clearCart, user]);


    console.log('User:', user);







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
                        <div>
                            <div ref={paypal}></div>
                        </div>
                    </>) : <p className="text-center text-lg font-bold">Please login to proceed to checkout</p>
                )}
            </div>
        </div>
    );
}
