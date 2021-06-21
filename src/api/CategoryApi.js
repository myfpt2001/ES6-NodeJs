import { axiosClient } from './axiosClient';

const CategoryApi = {
    getAll() {
        const url = `/categories`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/categories/${id}`;
        return axiosClient.get(url);
    },
    add(categories, token) {
        const add = sessionStorage.getItem('user')
        var auth = JSON.parse(add);
        var token = auth.token;
        var userId = auth.user._id;
        console.log(token)

        const url = `/categories/${userId}`;
        return axiosClient.post(url, categories, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    update(id, data, token) {
        const update = sessionStorage.getItem('user')
        var auth = JSON.parse(update);
        var token = auth.token;
        var userId = auth.user._id;
        console.log(token)
        const url = `/categories/${id}/${userId}`;
        return axiosClient.put(url, data, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    remove(id, token) {
        const remove = sessionStorage.getItem('user')
        var auth = JSON.parse(remove);
        var token = auth.token;
        var userId = auth.user._id;
        console.log(token)

        const url = `/categories/${id}/${userId}`;
        return axiosClient.delete(url, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    }
}
export default CategoryApi;