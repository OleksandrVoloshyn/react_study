import {axiosService} from "./axios.service";
import {urls} from "../constants";

const usersService = {
    getAll: () => axiosService.get(urls.users)
}

export {usersService}