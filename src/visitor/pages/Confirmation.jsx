import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { format } from 'date-fns';
import {Link} from "react-router-dom";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Confirmation = () => {
    const [sale, setSale] = useState(null);
    const { user, isLoading } = useContext(UserContext);

    console.log(user);

    const fetchSales = () => {
        axios.get('http://localhost:4000/sales')
            .then(res => {
                const userSales = res.data.filter(sale => sale.userId === user.id);

                if (userSales.length > 0) {
                    const latestSale = userSales[userSales.length - 1];
                    setSale(latestSale);
                }
            })
            .catch(error => console.error('Error: ', error));
    };

    useEffect(() => {
        fetchSales();
    }, [user.id]);

    if (isLoading || !sale) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <section className="container mx-auto px-4 md:px-8 lg:px-32">
                <div className="w-full my-10">
                    <h2 className="font-manrope font-bold text-4xl leading-10 text-emerald-500 text-center py-2">
                        <IoCheckmarkDoneOutline className="inline-block text-5xl text-emerald-500 m-3" />
                        <span>Order Confirmed</span>
                    </h2>
                    <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
                        Thanks for making a purchase. You can check your order summary below.
                    </p>
                    <div className="main-box border border-gray-900 rounded-xl pt-6 max-w-xl lg:max-w-full mx-auto">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-900">
                            <div className="data">
                                <p><span className="font-extrabold">Order Id:</span> <span
                                    className="text-indigo-600 font-medium">{sale._id.slice(0, 10)}</span></p>
                                <p> <span className="font-extrabold">Order Payment: </span>   <span className="text-gray-400 font-medium">
                                    {format(new Date(sale.date), 'PPPpp')}
                                </span></p>
                            </div>
                        </div>

                        {sale.product.map((product, index) => (
                            <div key={index} className="w-full px-3 py-6 border-b border-gray-400 flex flex-col lg:flex-row items-center gap-6">
                                <div className="flex-1">
                                    <h2 className="font-semibold text-xl leading-8 text-black mb-3">{product.item}</h2>
                                    <p className="font-medium text-base leading-7 text-black">Qty: <span className="border-gray-900">{product.quantity}</span></p>
                                </div>
                                <div className="flex-1 text-right">
                                    <p className="font-medium text-sm leading-7 text-black">Price: <span className="font-bold text-sm leading-7 text-emerald-500">${product.price}</span></p>
                                </div>
                            </div>
                        ))}

                        <div className="w-full border-t border-gray-900 px-6 flex flex-col lg:flex-row items-center justify-between">
                            <p className="font-semibold text-lg text-black py-6">Total Price: <span className="text-emerald-500 font-bold">${sale.totalAmount}</span></p>
                        </div>
                    </div>

                    <div className="flex justify-center mt-10">
                        <Link to="/" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg ml-4">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Confirmation;
