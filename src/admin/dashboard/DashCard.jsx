import React from 'react';
import {Link } from "react-router-dom";

const DashCard = ({ productsCount, categoriesCount, usersCount, totalSales}) => {
    return (
        <div className="flex justify-between space-x-4">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md w-1/4">
                <h2 className="text-2xl font-bold">{totalSales} CAD</h2>
                <p>Total Sales</p>
                <Link to="sales" className="mt-4 text-blue-200 hover:text-white">More Info</Link>
            </div>

            <div className="bg-green-500 text-white p-4 rounded-lg shadow-md w-1/4">
                <h2 className="text-2xl font-bold">{productsCount}</h2>
                <p>Number of Products</p>
                <Link to="products" className="mt-4 text-green-200 hover:text-white">More Info</Link>
            </div>

            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md w-1/4">
                <h2 className="text-2xl font-bold">{usersCount}</h2>
                <p>Number of Users</p>
                <Link to="clients" className="mt-4 text-yellow-200 hover:text-white">More Info</Link>
            </div>

            <div className="bg-red-500 text-white p-4 rounded-lg shadow-md w-1/4">
                <h2 className="text-2xl font-bold">{categoriesCount}</h2>
                <p>Number of Categories</p>
                <Link  to="categories" className="mt-4 text-red-200 hover:text-white">More Info</Link>
            </div>
        </div>
    );
};

export default DashCard;
