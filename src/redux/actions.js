import {LOAD_POSTS, LOAD_USERS} from "./action.types";

// const loadUsers = (payload, dispatch) => {
//     dispatch({type: LOAD_USERS, payload})
// }
const loadUsers = () => async (dispatch) => {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    dispatch({type: LOAD_USERS, payload: users})
}

// const loadPosts = (payload, dispatch) => {
//     dispatch({type: LOAD_POSTS, payload})
// }
const loadPosts = () => async (dispatch) => {
    let posts = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
    dispatch({type: LOAD_USERS, payload: posts})
}

export {loadUsers, loadPosts}