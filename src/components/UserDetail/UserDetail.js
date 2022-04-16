import React from 'react';

const UserDetail = ({user}) => {
    const {id, name, username, email, phone, website} = user;
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
        </div>
    );
};

export {UserDetail};