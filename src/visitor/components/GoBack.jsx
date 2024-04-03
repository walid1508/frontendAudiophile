import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)} className="mt-20">
            Go Back
        </button>
    );
};

export default GoBackButton;
