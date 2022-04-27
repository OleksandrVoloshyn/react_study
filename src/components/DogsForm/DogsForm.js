import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {actionsDog} from "../../redux";

const DogsForm = () => {
    const dogName = useRef();
    const dispatch = useDispatch();
    const {dogForUpdate} = useSelector(state => state.dogs);

    const saveOrUpdate = () => {
        if (dogForUpdate) {
            dispatch(actionsDog.dogUpdate({name: dogName.current.value}))
        } else {
            dispatch(actionsDog.add({name: dogName.current.value}))
        }
        dogName.current.value = ''
    }

    useEffect(() => {
        if (dogForUpdate) {
            dogName.current.value = dogForUpdate.name
        }
    }, [dogForUpdate])

    return (
        <div>
            <label>Dog name: <input type="text" ref={dogName}/></label>
            <button onClick={saveOrUpdate}>{dogForUpdate ? 'Update' : 'Save'}</button>
        </div>
    );
};

export {DogsForm};