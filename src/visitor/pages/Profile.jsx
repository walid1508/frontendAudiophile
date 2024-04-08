import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from "../../context/userContext";
import Avvvatars from 'avvvatars-react';
import { Helmet } from "react-helmet";
import TitleCard from '../components/TitleCard';
import axios from "axios";

const Profile = () => {
    const { user, isLoading } = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [openAccordions, setOpenAccordions] = useState({});
    const [telechargement, setTelechargement] = useState(false);

    const fetchOrders = () => {
        setTelechargement(true);
        axios.get('http://localhost:4000/sales')
            .then(res => {
                const userSales = res.data.filter(sale => sale.userId === user.id);
                setOrders(userSales);
                console.log('Data received:', userSales);
                setTelechargement(false);
            })
            .catch(error => console.error('Error: ', error));
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const toggleAccordion = (index) => {
        setOpenAccordions(prevState => ({...prevState, [index]: !prevState[index]}));
    };

    return (
        telechargement ? (<p>Loading...</p>) : (
            <div>
                <TitleCard title={'Profile'} />
                <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50">
                    <Helmet>
                        <title>Audiophile | Profile</title>
                        <meta name="description" content="Profile page"/>
                    </Helmet>
                    {/* Informations personnelles */}
                    <div className="mb-10">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Personal information</h2>
                        <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <Avvvatars value={user?.name?.toUpperCase()} size={60} style={"shape"}/>
                            </div>
                            <div>
                                <p className="text-gray-900 text-xl font-semibold">{user?.name}</p>
                                <p className="text-gray-600">{user?.email}</p>
                            </div>
                        </div>
                    </div>
                    {/* Commandes */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Orders</h2>
                        <div className="space-y-4">
                            {orders.length > 0 ? orders.map((order, orderIndex) => (
                                <div key={orderIndex} className="bg-gray-200 p-4 rounded-lg">
                                    <h3 onClick={() => toggleAccordion(orderIndex)}
                                        className="text-lg font-semibold text-gray-800 cursor-pointer">
                                        Order #{order._id.slice(0, 10)} - Click to view products
                                    </h3>
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
                </div>
            </div>
        )
    );
};

export default Profile;
