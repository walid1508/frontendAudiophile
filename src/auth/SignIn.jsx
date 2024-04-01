import React from 'react';
import { Link } from 'react-router-dom';
import { IoMailOutline, IoLockClosedOutline, IoMusicalNotes } from 'react-icons/io5';
import {useState} from "react";
import axios from "axios";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../context/userContext";
import {useContext} from "react";
import {Helmet} from "react-helmet";

const SignIn = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = data;

        try {
            const {data} = await axios.post('/login', { email, password });

            if(data.error) {
                return toast.error(data.error);
            }
            else{
                setUser(data);
                toast.success(`${data.name}, welcome back!`);
                setData({ email: '', password: '' })
                navigate('/');
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
            <Helmet>
                <title>Audiophile | Login</title>
                <meta name="description" content="Login page" />
            </Helmet>
            <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-300 bg-white rounded-lg shadow-xl w-full max-w-4xl">
                <div className="md:w-1/2 p-8 flex flex-col justify-center items-center text-center">
                    <h2 className="text-2xl font-extrabold text-gray-700 mb-4">Welcome back to Audiophile!</h2>
                    <p className="text-gray-600 mb-6">
                        We're excited to see you return. Please sign in to continue to the amazing world of high-fidelity audio.
                    </p>
                    <IoMusicalNotes className="text-orange-500 text-6xl" />
                </div>

                <div className="md:w-1/2 p-8">
                    <h2 className="text-2xl font-extrabold text-gray-700 text-center mb-6">Connect to start your session</h2>

                    <form className="space-y-6" onSubmit={loginUser}>
                        <div className="flex align-middle">
                            <IoMailOutline className="text-orange-500 text-lg mt-2 mr-2"/>
                            <input type="email" id="email" className="w-full p-2 border rounded"
                                   placeholder="Enter your email" required autoComplete="off"
                                   value={data.email} onChange={(e) => setData({...data, email: e.target.value})}
                            />
                        </div>

                        <div className="flex align-middle">
                            <IoLockClosedOutline className="text-orange-500 text-lg mt-2 mr-2"/>
                            <input type="password" id="password" className="w-full p-2 border rounded"
                                   placeholder="Enter your password" required
                                   value={data.password} onChange={(e) => setData({...data, password: e.target.value})}
                            />
                        </div>

                        <button type="submit"
                                className="w-full flex justify-center items-center py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
                            Sign In
                        </button>
                    </form>

                    <div className="flex flex-col items-center mt-6 space-y-2">
                        <Link to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700 hover:underline">
                            Forgot your password?
                        </Link>

                        <span className="text-sm text-gray-600">Don't have an account?
                            <Link to="/signup" className="text-blue-500 hover:text-blue-700 hover:underline pl-2">
                                Sign up
                            </Link>
                        </span>

                        <div className="text-center text-sm text-gray-600 w-full">
                            or go back to
                            <Link to="/" className="text-blue-500 hover:text-blue-700 hover:underline pl-2">
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
