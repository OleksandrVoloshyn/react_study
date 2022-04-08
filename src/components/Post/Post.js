import React from 'react';

export const Post = ({item}) => {
    const {id, title} = item
    return (
        <div>
            {id} -- {title}
        </div>
    );
};