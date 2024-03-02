import React from 'react';
import Header from "../components/Header";
import CategorieNav from "../components/CategorieNav";
import LargeSpeaker from "../components/LargeSpeaker";
import SmallSpeaker from "../components/SmallSpeaker";
import SmallEarphone from "../components/SmallEarphone";
import Credit from "../components/Credit";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <div className="bg-noir-1" style={{
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px'
            }}>

                <div className="container mx-auto px-4 md:px-8 lg:px-32">
                    <Header/>
                    <div className="flex flex-col lg:flex-row bg-no-repeat sm:bg-center hero sm:mt-5"
                         style={{height: '80vh', width: '100%', backgroundSize: 'cover'}}>
                        <div
                            className="flex-1 flex flex-col justify-center items-center px-4 py-8 text-center sm:p-0 lg:items-start lg:text-left">
                            <p className="text-xs uppercase mb-2 new-product-message">NEW PRODUCT</p>
                            <h3 className="text-2xl font-bold mb-4 hero-title">
                                XX99 MARK II HEADPHONES
                            </h3>
                            <p className="mb-6 text-white">
                                Experience natural, lifelike audio and exceptional build quality made for the passionate
                                music enthusiast.
                            </p>
                            <button className="bg-orange-1 text-white py-2 px-4 hero-message">
                                SEE PRODUCT
                            </button>
                        </div>
                        <div className="flex-1">

                        </div>
                    </div>
                </div>
            </div>

            <div className="space-between-component">
                <CategorieNav/>
            </div>

            <div className="space-between-component">
                <LargeSpeaker/>
            </div>

            <div className="space-between-component">
                <SmallSpeaker/>
            </div>

            <div className="space-between-component">
                <SmallEarphone/>
            </div>

            <div className="space-between-component">
                <Credit />
            </div>

            <div style={{backgroundColor: '#101010'}}>
                <Footer/>
            </div>

        </>
    );
};

export default Home;