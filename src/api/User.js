import { axiosClient } from "./axiosClient";
const UserApi = {
    getAll() {
        const url = `/user`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/user/${id}`;
        return axiosClient.get(url);
    },
    add(user) {
        const url = `/signup`;
        return axiosClient.post(url, user);
    },
    update(id, data) {
        const url = `/user/${id}`;
        return axiosClient.put(url, data);
    },
    signin(account) {
        const url = `/signin`;
        return axiosClient.post(url, account);
    },
}
export default UserApi;