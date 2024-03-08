import React from 'react';

const NotFound = () => {
    return (
        <section className="bg-gray-900 min-h-screen">
            <div
                className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex items-center justify-center min-h-screen">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-orange-500">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Something's
                        missing.</p>
                    <p className="mb-4 text-lg font-light text-white">Sorry, we can't find that
                        page. You'll find lots to explore on the home page. </p>
                    <a href="/"
                       className="bg-orange-500 hover:bg-orange-600 inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-primary-900 my-4">Back
                        to Homepage</a>
                </div>
            </div>
        </section>
    );
};

export default NotFound;