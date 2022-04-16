import React from 'react';

import css from './Buttom.module.css'
import {Link} from "react-router-dom";

const Button = ({to, state, children,...args}) => {
    return (
        <Link to={to} state={state}>
            <button className={css.button} {...args}>{children}</button>
        </Link>
    );
};

export {Button};