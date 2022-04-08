import React, {useEffect, useState} from 'react';

import {getAllUsers} from "../../services";
import {User} from "../User/User";

export const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers().then(value => setUsers(value))
    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} item={user}/>)}
        </div>
    );
};
