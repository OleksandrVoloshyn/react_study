import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <hr/>
            <div>id: {post.id}, title: {post.title}</div>
            <div>body: {post.body}</div>
        </div>
    );
};

export {Post};