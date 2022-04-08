import React from 'react';

export const User = ({item}) => {
    const {id, name, email} = item
    return (
        <div>
            {id} -- {name} -- {email}
        </div>
    );
};
