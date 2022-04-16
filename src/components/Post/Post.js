import React from 'react';
// import {Link} from "react-router-dom";

import {Button} from "../Button/Button";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            {/*{id} -- {title} <Link to={id.toString()} state={post}>getDetails</Link>*/}
            {id} -- {title} <Button to={id.toString()} state={post}>getDetails</Button>
        </div>
    );
};

export {Post};