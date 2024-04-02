import EditSettings from './EditSettings';
import Avvvatars from 'avvvatars-react';
import React, {useContext, useState} from "react";
import {UserContext} from "../../context/userContext";

const Settings = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { user } = useContext(UserContext);


    return (
        <div className="bg-gray-50 min-h-screen flex items-center justify-center px-4 py-8">
            <div className="max-w-lg w-full space-y-8 bg-white rounded-xl shadow-2xl p-8">
                <div className="text-center">
                    <Avvvatars value={user.name} style="shape" size={90} className="mx-auto"/>
                    <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                        Profile Settings
                    </h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Manage your account settings.
                    </p>
                </div>
                <div className="mt-10">
                    <div className="rounded-md shadow-sm space-y-4">
                        <div className="text-left">
                            <div className="mb-1 text-sm text-gray-600">Name</div>
                            <div className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">{user.name}</div>
                        </div>
                        <div className="text-left">
                            <div className="mb-1 text-sm text-gray-600">Email</div>
                            <div className="px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">{user.email}</div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition duration-150 ease-in-out"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <EditSettings
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    adminInfo={user}
                    updateAdminInfo={(updatedInfo) => {
                        console.log('Admin info updated');
                    }}
                />
            )}
        </div>
    );
};

export default Settings;
