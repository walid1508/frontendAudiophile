import React from 'react';
import {useContext} from "react";
import {UserContext} from "../../context/userContext";
import Avvvatars from 'avvvatars-react';
import {Helmet} from "react-helmet";
import TitleCard from '../components/TitleCard';

const Profile = () => {
    const {user} = useContext(UserContext);

    const orders = [
        { id: 1, product: 'Produit A', date: '2023-01-01', status: 'Livré' },
        { id: 2, product: 'Produit B', date: '2023-02-15', status: 'En cours' },
        { id: 3, product: 'Produit C', date: '2023-03-10', status: 'Annulé' },
    ];

    return (
   <div>
      <TitleCard title = {'Profile'} />
     <div className="max-w-4xl mx-auto px-4 py-8 bg-gray-50">
            <Helmet>
                <title>Audiophile | Profile</title>
                <meta name="description" content="Profile page" />
            </Helmet>
           
            <div className="mb-10">
                <h2 className="text-xl font-semibold text-gray-700 mb-6">Personal information</h2>
                <div className="bg-white shadow-md rounded-lg p-6 flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <Avvvatars value={user?.name?.toUpperCase()} size={60}/>
                    </div>
                    <div>
                        <p className="text-gray-900 font-semibold">{user?.name}</p>
                        <p className="text-gray-600">{user?.email}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-6">Orders</h2>
                <div className="space-y-4">
                    {orders.map((order) => (
                        <div key={order.id} className="bg-white shadow-md rounded-lg p-6">
                            <p className="text-gray-900 mb-2 font-semibold">{order.product}</p>
                            <p className="text-gray-600 mb-2">Date: {order.date}</p>
                            <p className="font-semibold">
                                Status: <span
                                className={`rounded-full text-sm px-3 py-1 ${order.status === 'Livré' ? 'bg-green-100 text-green-600' : order.status === 'En cours' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'}`}>
                                    {order.status}
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

   </div>
    );
};

export default Profile;