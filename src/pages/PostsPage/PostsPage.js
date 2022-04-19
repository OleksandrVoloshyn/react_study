import React, {useContext, useEffect, useState} from 'react';
import {Outlet, useSearchParams} from "react-router-dom";
import {postService} from "../../services";
import {Post} from "../../components";
// import {MyContext} from "../../index";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    // let value = useContext(MyContext);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        postService.getAll(query.get('page'), 5).then(({data}) => setPosts(data))
        // console.log(value)
        // value.name = 'Roman'
    }, [query])

    const nextPage = () => {
        // let page = +query.get('page');
        // page += 1
        // setQuery({'page': page.toString()})
        let queryObj = Object.fromEntries(query.entries());
        queryObj.page++
        setQuery(queryObj)
    }

    return (
        <div style={{display: 'flex'}}>
            <div>
                {posts.map(post => <Post key={post.id} post={post}/>)}
                <button onClick={() => nextPage()}>nextPage</button>
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostsPage};