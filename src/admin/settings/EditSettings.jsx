import React, { useState, useEffect } from 'react';

const EditSettings = ({ isModalOpen, setIsModalOpen, adminInfo, updateAdminInfo }) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (adminInfo) {
            setName(adminInfo.name || '');
        }
    }, [adminInfo]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateAdminInfo({ name, password });
        console.log('Admin info updated successfully');
        setIsModalOpen(false);
    };

    const isFormValid = () => {
        return name.trim() !== '' && password.trim() !== '';
    };

    return (
        <div className={`${isModalOpen ? 'block' : 'hidden'} fixed inset-0 z-10 overflow-y-auto`}>
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-filter backdrop-blur-lg"></div>
                <div className="relative bg-white rounded-lg shadow-xl transform transition-all sm:max-w-lg sm:w-full mx-auto p-6">
                    <h3 className="text-2xl font-semibold mb-4">Edit Admin Settings</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder="Name"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="New Password"
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                className="px-4 py-2 rounded text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={!isFormValid()}
                                className={`px-4 py-2 rounded text-white ${isFormValid() ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-400 cursor-not-allowed'}`}
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditSettings;
