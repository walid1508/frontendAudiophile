import React, { useContext, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart";
import axios from "axios";
import {UserContext} from "../../context/userContext";

const PayPal = () => {
    const paypal = useRef();
    const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
    const { user, isLoading } = useContext(UserContext);
    const navigate = useNavigate();

    console.log(user);


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
    }, [cartItems, getCartTotal, clearCart]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
};

export default PayPal;
