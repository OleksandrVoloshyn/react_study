import React from 'react';
import {Button} from "../Button/Button";

const User = ({user}) => {
    const {id, name, email} = user
    return (
        <div>
            {id} -- {name} -- {email} <Button to={id.toString()} state={user}>get Details</Button>
        </div>
    );
};

export {User};