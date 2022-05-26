import React from 'react';
import { useLocation } from 'react-router-dom';

const Movie = () => {
    const location = useLocation();
    // console.log(location);

    return (
        <div>
            <h3>{location.state.name}</h3>
            <p>{location.state.description}</p>
        </div>
    );
};

export default Movie;