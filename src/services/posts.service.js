import {axiosService} from "./axios.service";
import {urls} from "../constants";

const postService = {
    getByUserId: (userId) => axiosService.get(urls.users + '/' + userId + urls.posts)
}

export {postService}