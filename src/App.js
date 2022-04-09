import React, {useState} from "react";

import styles from './App.module.css'
import {Posts, UserInfo, Users} from "./components";
import {postService} from "./services";

function App() {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState(null);

    const getPostByUserId = (userId) => postService.getByUserId(userId).then(({data}) => setPosts(data))

    return (
        <div>
            <div className={styles.user_header}>
                <Users setUser={setUser}/>
                {user && <UserInfo user={user} getPostByUserId={getPostByUserId}/>}
            </div>
            {posts && <Posts posts={posts}/>}
        </div>
    );
}

export default App;
