import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll: () => axiosService.get(urls.cars),
    getById: id => axiosService.get(`${urls.cars}/${id}`),
    create: data => axiosService.post(urls.cars, data),
    updateById: (id, newData) => axiosService.put(`${urls.cars}/${id}`, newData),
    deleteById: id => axiosService.delete(`${urls.cars}/${id}`)
}

export {carService}