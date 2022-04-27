import React from 'react';
import {useDispatch} from "react-redux";

import {actionsCat} from "../../redux";

const Cat = ({cat}) => {
    const dispatch = useDispatch();
    return (
        <div>
            {cat.id} -- {cat.name}
            <button onClick={() => dispatch(actionsCat.setCatForUpdate({catForUpdate: cat}))}>update</button>
            <button onClick={() => dispatch(actionsCat.deleteById({id: cat.id}))}>delete</button>
        </div>
    );
};

export {Cat};