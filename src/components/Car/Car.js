import React from 'react';
import {Link} from "react-router-dom";

const Car = ({car,car: {id, model, price}}) => {
    return (
        <div>
            {id} -- {model} -- {price}
            <Link to={id.toString()} state={car}>
                <button>info</button>
            </Link>
        </div>
    );
};

export {Car};