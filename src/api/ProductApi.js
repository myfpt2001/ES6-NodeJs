import { axiosClient } from './axiosClient';

const ProductApi = {
    getAll() {
        const url = `/products`;
        return axiosClient.get(url);
    },
    get(id) {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    add(products, token) {
        const add = sessionStorage.getItem('user')
        var auth = JSON.parse(add);
        var token = auth.token;
        var userId = auth.user._id;
        console.log(token)

        const url = `/products/${userId}`;
        return axiosClient.post(url, products, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    },
    update(id, data, token) {
        const update = sessionStorage.getItem('user')
        var auth = JSON.parse(update);
        var token = auth.token;
        var userId = auth.user._id;
        console.log(token)

        const url = `/products/${id}/${userId}`;
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

        const url = `/products/${id}/${userId}`;
        return axiosClient.delete(url, {
            headers: { 'Authorization': 'Bearer ' + token }
        });
    }
}
export default ProductApi;