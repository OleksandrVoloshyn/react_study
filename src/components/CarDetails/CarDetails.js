import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom'
import {carActions} from "../../redux";

const CarDetails = ({car, car: {id, model, year, price}}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteById = async () => {
        await dispatch(carActions.deleteById({id}))
        navigate('/cars')
    }
    return (
        <div>
            <p><b>Id: </b> {id}</p>
            <p><b>Model: </b> {model}</p>
            <p><b>Price: </b> {price}</p>
            <p><b>Year: </b> {year}</p>
            <button onClick={deleteById}>delete</button>
            <button onClick={() => dispatch(carActions.setCarForUpdate({car}))}>update</button>
        </div>
    );
};

export {CarDetails};