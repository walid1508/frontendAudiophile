import React, { useEffect, useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sales = () => {
    const [sales, setSales] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [openAccordions, setOpenAccordions] = useState({});

    const fetchSales = () => {
        setIsLoading(true);
        axios.get('http://localhost:4000/sales')
            .then(res => {
                console.log('Data received:', res.data);
                setSales(res.data);
                setIsLoading(false);
            })
            .catch(error => console.error('Error: ', error));
    };

    const fetchUsers = () => {
        axios.get('http://localhost:4000/users')
            .then(res => {
                setUsers(res.data);
            })
            .catch(error => console.error('Error: ', error));
    }

    useEffect(() => {
        fetchSales();
        fetchUsers();
    }, []);

    const toggleAccordion = (index) => {
        setOpenAccordions(prevState => ({ ...prevState, [index]: !prevState[index] }));
    };


    const findUserNameById = (userId) => {
        const user = users.find(user => user._id === userId);
        return user ? user.name : 'Unknown User';
    };

    const notifyDelete = () => toast.success('Order refunded successfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const handleDelete = (id) => {
        axios.delete(`http://localhost:4000/sales/${id}`)
            .then(res => {
                console.log('Deleted:', res.data);
                fetchSales();
                notifyDelete();
            })
            .catch(error => console.error('Error: ', error));
    }

    return (
        <div>
            <h3 className="text-2xl font-medium py-4">
                Orders
            </h3>
            <div>
                <div className="space-y-4">
                    {isLoading ? <p>Loading...</p> : sales.length > 0 ? sales.map((order, orderIndex) => (
                        <div key={orderIndex} className="bg-gray-200 p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                                <h3 onClick={() => toggleAccordion(orderIndex)}
                                    className="text-lg font-semibold text-gray-800 cursor-pointer">
                                <span
                                    className="bg-emerald-200 rounded-full p-2">Order #{order._id.slice(0, 10)}</span> - {findUserNameById(order.userId)} -
                                    Click to view products
                                </h3>
                                <div>
                                    <button className="bg-blue-500 hover-bg-blue-600 text-white px-2 rounded-full mr-2"
                                            >Edit
                                    </button>
                                    <button className="bg-red-500 hover-bg-red-600 text-white px-2 rounded-full"
                                            onClick={() => handleDelete(order._id)}>Refund
                                    </button>
                                </div>
                            </div>
                            {openAccordions[orderIndex] && (
                                <div className="space-y-2 mt-4">
                                    {order.product.map((product, productIndex) => (
                                        <div key={productIndex} className="bg-white shadow-md rounded-lg p-6">
                                            <h4 className="text-xl font-semibold text-gray-900">{product.item}</h4>
                                            <p className="text-gray-600">Qty: {product.quantity}</p>
                                            <p className="text-gray-600">Price: ${product.price}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )) : <p>No orders yet</p>}
                </div>
            </div>

            <ToastContainer/>
        </div>
    );
};

export default Sales;
