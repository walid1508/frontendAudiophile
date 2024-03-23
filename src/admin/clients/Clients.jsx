import React from 'react';
import {useEffect} from "react";
import axios from "axios";

const Clients = () => {

    useEffect(() => {
        axios.get('http://localhost:4000/users').then(({data}) => {
            console.log(data);
        });
    }, []);

    return (
        <div>
            Clients Pages
        </div>
    );
};

export default Clients;