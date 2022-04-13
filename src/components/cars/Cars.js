import React, {useEffect, useState} from 'react';

import {carService} from "../../services";
import {Car} from "../car/Car";

const Cars = ({newCar, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);
    const [deletedCarId, setDeletedCarId] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [newCar, deletedCarId])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}
                                  setDeletedCarId={setDeletedCarId}/>)}
        </div>
    );
};

export {Cars};