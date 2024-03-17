import React from 'react';
import { Link } from 'react-router-dom';
import { IoPersonOutline, IoMailOutline, IoLockClosedOutline, IoCheckmarkDoneOutline, IoMusicalNotes, IoArrowBack } from 'react-icons/io5';

const SignUp = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-300 bg-white rounded-lg shadow-xl w-full max-w-4xl">
                <div className="md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
                    <h2 className="text-2xl font-extrabold text-gray-700 mb-4">Welcome to Audiophile!</h2>
                    <p className="text-gray-600 mb-6">
                        Join our community to explore the high-fidelity audio world.
                    </p>
                    <IoMusicalNotes className="text-orange-500 text-6xl" />
                </div>

                <div className="md:w-1/2 p-8">
                    <h2 className="text-2xl font-extrabold text-gray-700 text-center mb-6">Create Your Account</h2>

                    <form className="space-y-6">
                        <div className="flex align-middle">
                            <IoPersonOutline className="text-gray-400 text-lg mt-2 mr-2"/>
                            <input type="text" id="name" className="w-full p-2 border rounded"
                                   placeholder="Full Name" required autoComplete="off"/>
                        </div>

                        <div className="flex align-middle">
                            <IoMailOutline className="text-gray-400 text-lg mt-2 mr-2"/>
                            <input type="email" id="email" className="w-full p-2 border rounded"
                                   placeholder="Email" required autoComplete="off"/>
                        </div>

                        <div className="flex align-middle">
                            <IoLockClosedOutline className="text-gray-400 text-lg mt-2 mr-2"/>
                            <input type="password" id="password" className="w-full p-2 border rounded"
                                   placeholder="Password" required/>
                        </div>

                        <div className="flex align-middle">
                            <IoCheckmarkDoneOutline className="text-gray-400 text-lg mt-2 mr-2"/>
                            <input type="password" id="confirmPassword" className="w-full p-2 border rounded"
                                   placeholder="Confirm Password" required/>
                        </div>

                        <button type="submit"
                                className="w-full flex justify-center items-center py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
                            <IoArrowBack className="text-lg mr-2"/> Sign Up
                        </button>
                    </form>

                    <div className="flex flex-col items-center mt-6 space-y-2">
                        <span className="flex items-center text-sm text-gray-600">Already have an account?
                            <Link to="/signin" className="flex items-center text-blue-500 hover:text-blue-700 hover:underline pl-2">
                                Sign In
                            </Link>
                        </span>

                        <span className="flex items-center text-sm text-gray-600">or go back to
                            <Link to="/" className="flex items-center text-blue-500 hover:text-blue-700 hover:underline pl-2">
                                Home
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
