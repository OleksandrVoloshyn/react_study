import React from 'react';

const User = ({user, setUser, setPosts}) => {
    const click = () => {
        setPosts(false)
        setUser(user)
    }

    return (
        <div>
            {user.id} -- {user.name}
            <input type="button" value={'Get details'} onClick={click}/>
        </div>
    );
};

export {User};