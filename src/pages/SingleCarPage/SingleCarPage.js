import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {CarDetails} from "../../components";
import {carService} from "../../services";

const SingleCarPage = () => {
    const [car, setCar] = useState(null)
    const {state} = useLocation();
    const {carId} = useParams();

    useEffect(() => {
        if (state) {
            setCar(state)
        } else {
            carService.getById(carId).then(({data}) => setCar(data))
        }
    }, [state, carId])
    return (
        <div>
            {
                car && <CarDetails car={car}/>
            }
        </div>
    );
};

export {SingleCarPage};