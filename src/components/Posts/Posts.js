import React, {useEffect, useState} from 'react';

import {getAllPosts} from "../../services";
import {Post} from "../Post/Post";

export const Posts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts().then(value => setPosts(value))
    }, [])

    return (
        <div>
            {posts.map(post => <Post key={post.id} item={post}/>)}
        </div>
    );
};