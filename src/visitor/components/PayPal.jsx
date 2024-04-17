// import React, { useContext, useEffect, useRef } from 'react';
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "../../context/cart";
// import axios from "axios";
// import {UserContext} from "../../context/userContext";
//
// const PayPal = ({user}) => {
//     const paypal = useRef();
//     const { cartItems, getCartTotal, clearCart } = useContext(CartContext);
//     const { isLoading } = useContext(UserContext);
//     const navigate = useNavigate();
//
//     console.log(user);
//
//
//
//
//     if (isLoading) {
//         return <p>Loading...</p>;
//     }
//
//     return (
//         <>
//             {
//                 user ? (
//
//                 ) : <p className="text-center text-lg font-bold">Please login to proceed to checkout</p>
//             }
//         </>
//     );
// };
//
// export default PayPal;
