import React from 'react';

export const Comment = ({item}) => {
    const {id, body} = item

    return (
        <div>
            {id} -- {body}
        </div>
    );
};