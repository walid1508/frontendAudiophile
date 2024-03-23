import React from 'react';
import {Helmet} from "react-helmet";

const Headphones = () => {
    return (
        <div className="text-3xl font-extralight text-center">
            <Helmet>
                <title>Audiophile | Headphones</title>
                <meta name="description" content="Headphones page" />
            </Helmet>


            Hey! I'm Headphones page
            <br/>
            You can find me at frontendAudiophile/src/visitor/pages/Headphones.jsx
        </div>
    );
};

export default Headphones;