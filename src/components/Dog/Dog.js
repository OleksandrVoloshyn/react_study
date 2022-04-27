import React from 'react';
import {useDispatch} from "react-redux";

import {actionsDog} from "../../redux";

const Dog = ({dog}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {dog.id} -- {dog.name}
            <button onClick={() => dispatch(actionsDog.setDogForUpdate({dogForUpdate: dog}))}>update</button>
            <button onClick={() => dispatch(actionsDog.deleteById(dog.id))}>delete</button>
        </div>
    );
};

export {Dog};