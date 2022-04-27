import React, {useEffect, useRef} from 'react';
import {actionsCat} from "../../redux";
import {useDispatch, useSelector} from "react-redux";

const CatsForm = () => {
    const catName = useRef();
    const dispatch = useDispatch();
    const {catForUpdate} = useSelector(state => state.cats);

    const saveOrUpdate = () => {
        if (catForUpdate) {
            dispatch(actionsCat.catUpdate({name: catName.current.value}))
        } else {
            dispatch(actionsCat.add({name: catName.current.value}))
        }
        catName.current.value = ''
    }

    useEffect(() => {
        if (catForUpdate) {
            catName.current.value = catForUpdate.name
        }
    }, [catForUpdate])
    return (
        <div>
            <label>Cat name:<input type="text" ref={catName}/></label>
            <button onClick={saveOrUpdate}>{catForUpdate ? 'Update' : 'Save'}</button>
        </div>
    );
};

export {CatsForm};