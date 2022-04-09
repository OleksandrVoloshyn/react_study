import React from 'react';

const User = ({user, setUser}) => {
    return (
        <div>
            {user.id} -- {user.name}
            <input type="button" value={'Get details'} onClick={() => setUser(user)}/>
        </div>
    );
};

export {User};