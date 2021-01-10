import Axios from "axios";

const instance = Axios.create({
    baseURL: 'http://localhost:5000/',
});

export const usersAPI = {
    getUsers: (params) => instance.get(`users/${params}`),
}
