import React from 'react';

const DashCard = () => {
    return (
        <div className="flex justify-between space-x-4">
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md w-1/4">
                <h2 className="text-2xl font-bold">16,239.81 CAD</h2>
                <p>Total Sales</p>
                <button className="mt-4 text-blue-200 hover:text-white">More Info</button>
            </div>

            <div className="bg-green-500 text-white p-4 rounded-lg shadow-md w-1/4">
                <h2 className="text-2xl font-bold">23</h2>
                <p>Number of Products</p>
                <button className="mt-4 text-green-200 hover:text-white">More Info</button>
            </div>

            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md w-1/4">
                <h2 className="text-2xl font-bold">2</h2>
                <p>Number of Users</p>
                <button className="mt-4 text-yellow-200 hover:text-white">More Info</button>
            </div>

            <div className="bg-red-500 text-white p-4 rounded-lg shadow-md w-1/4">
                <h2 className="text-2xl font-bold">0.00 CAD</h2>
                <p>Today's Sales</p>
                <button className="mt-4 text-red-200 hover:text-white">More Info</button>
            </div>
        </div>
    );
};

export default DashCard;
