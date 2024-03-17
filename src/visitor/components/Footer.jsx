import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-noir-1">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                <div className="flex flex-col lg:flex-row lg:space-x-8">
                    <div className="lg:flex-1">
                        <h3 className='text-2xl font-extrabold text-white text-left sm:text-left lg:text-left'>Audiophile</h3>
                        <p className="mt-6 text-left sm:text-left lg:text-left text-white">
                            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                        </p>
                    </div>

                    <div className="lg:flex-1">
                        <p className="text-lg font-medium text-white text-center sm:text-left lg:text-center">Helpful Links</p>
                        <ul className="mt-4 flex flex-col items-center lg:items-center gap-2">
                            <li><a href="#" className="text-white hover:text-gray-400">Account</a></li>
                            <li><a href="#" className="text-white hover:text-gray-400">Order Tracking</a></li>
                            <li><a href="#" className="text-white hover:text-gray-400">Store Locations</a></li>
                            <li><a href="#" className="text-white hover:text-gray-400">Support</a></li>
                        </ul>
                    </div>


                    <div className="lg:flex-1">
                        <p className="text-lg font-medium text-white text-center sm:text-left lg:text-center">Contact Us</p>
                        <div className="flex flex-col items-center lg:items-center gap-2 mt-4">
                            <a href="#" className="text-white hover:text-gray-400">support@audiophile.com</a>
                            <a href="#" className="text-white hover:text-gray-400">0123456789</a>
                            <address className="not-italic text-white">12 Rue Donald, Gatineau, QC, J8T 2W1</address>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-100 pt-6">
                    <div className="text-center sm:flex sm:justify-between">
                        <p className="text-sm text-white">&copy; 2024 Audiophile. All rights reserved.</p>
                        <div className="mt-4 sm:mt-0">
                            <a href="#" className="text-sm text-white hover:text-teal-600">Terms & Conditions</a>
                            <span className="text-white mx-2">|</span>
                            <a href="#" className="text-sm text-white hover:text-teal-600">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
