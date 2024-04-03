import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { TbLogout } from "react-icons/tb";
import { Link } from 'react-router-dom';
import {useContext} from "react";
import {UserContext} from "../../context/userContext";
import Avvvatars from 'avvvatars-react';


const Header = () => {
    const { user, logout } = useContext(UserContext);
    return (
        <header className="bg-noir-1">
            <div className="container mx-auto px-4 md:px-6 lg:px-32 py-5">
                <div className="border-b border-gray-600 pb-8">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                         stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M4 6h16M4 12h8m-8 6h16"/>
                                    </svg>
                                </div>
                                <ul tabIndex={0}
                                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to="/">HOME</Link>
                                    </li>
                                    <li>
                                        <Link to="headphones">HEADPHONES</Link>
                                    </li>
                                    <li>
                                        <Link to="speakers">SPEAKERS</Link>
                                    </li>
                                    <li>
                                        <Link to="earphones">EARPHONES</Link>
                                    </li>

                                    {user ? (
                                        <>
                                            <li>
                                                <Link to="profile">PROFILE</Link>
                                            </li>
                                            <li>
                                                <Link to="/" onClick={logout}>LOGOUT</Link>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <Link to="signin">SIGN IN</Link>
                                            </li>
                                            <li>
                                                <Link to="signup">SIGN UP</Link>
                                            </li>
                                        </>
                                    )}

                                </ul>
                            </div>
                            <Link to="/" className="text-xl font-extrabold text-white ml-4 lg:ml-0">
                                audiophile
                            </Link>
                        </div>
                        <nav className="navbar-center hidden md:flex">
                            <ul className="menu menu-horizontal p-0">
                                <li>
                                    <Link to="/" className="font-semibold text-white hover:text-orange-500 focus:text-orange-600">HOME</Link>
                                </li>
                                <li>
                                    <Link to="headphones" className="font-semibold text-white hover:text-orange-500 focus:text-orange-600">HEADPHONES</Link>
                                </li>
                                <li>
                                    <Link to="speakers" className="font-semibold text-white hover:text-orange-500 focus:text-orange-600">SPEAKERS</Link>
                                </li>
                                <li>
                                    <Link to="earphones" className="font-semibold text-white hover:text-orange-500 focus:text-orange-600">EARPHONES</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="flex items-center">

                            {user ? (
                                <>
                                    <Link to="profile" className="text-white hover:text-orange-500">
                                        <Avvvatars value={ user.name.toUpperCase()} displayValue={ user.name.toUpperCase()} style={"shape"} />
                                    </Link>
                                    <Link to="/" onClick={logout} className="ml-4 text-white hover:text-orange-500">
                                        <TbLogout size="24px" className="text-white hover:text-orange-500" />
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link to="signin" className="text-white hover:text-orange-500">
                                        Log In
                                    </Link>
                                    <Link to="signup" className="ml-4 text-white hover:text-orange-500">
                                        Register
                                    </Link>
                                </>
                            )}


                            <Link to="cart" className="ml-4 ">
                                <IoCartOutline className="text-white hover:text-orange-500" size="24px" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
