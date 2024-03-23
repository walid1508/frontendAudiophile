import React from 'react';
import {Helmet} from "react-helmet";

const Catalog = () => {
    return (
        <div className="text-3xl font-extralight text-center">
            <Helmet>
                <title>Audiophile | Catalog</title>
                <meta name="description" content="Catalog page" />
            </Helmet>


            Hey, I'm the Catalog page
            <br/>
            you can find me at frontendAudiophile/src/visitor/pages/Catalog.jsx
        </div>
    );
};

export default Catalog;