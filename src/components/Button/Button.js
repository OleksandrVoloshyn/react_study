import React from 'react';

import css from './Buttom.module.css'

const Button = ({children}) => {
    return (
        <button className={css.button}>{children}</button>
    );
};

export {Button};