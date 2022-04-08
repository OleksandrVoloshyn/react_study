import React, {useEffect, useState} from 'react';

import {getAllComments} from "../../services";
import {Comment} from "../Comment/Comment";

export const Comments = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getAllComments().then(value => setComments(value))
    }, [])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} item={comment}/>)}
        </div>
    );
};