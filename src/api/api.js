import Axios from "axios";

const instance = Axios.create({
    baseURL: 'http://localhost:5000/users',
});

export const usersAPI = {
    getUsers: () => instance.get(),
    sortUsersByDesk: (type) => instance.get(`?_sort=${type}&_order=desc`),
    sortUsersByAsc: (type) => instance.get(`?_sort=${type}&_order=asc`),
}
