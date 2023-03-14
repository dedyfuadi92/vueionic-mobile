import axios from 'axios'
import { Preferences } from "@capacitor/preferences"

const instance = axios.create({
    baseURL: 'http://localhost:8000',
    // untuk latihan gunakan laravel sanctum api
    withCredentials: true,
});

// const logout = async () => {
//     localStorage.clear()
//     window.location.reload('/nft')
// }

instance.interceptors.request.use(async function (config) {
    const { value } = await Preferences.get({
        key: 'token'
    })

    config.headers['Content-Type'] = 'application/json';
    config.headers['Content-Type'] = 'multipart/form-data';
    config.headers['accept'] = 'application/json';
    if (value) {
        instance.defaults.headers.common['Authorization'] = 'Bearer ' + value;
        config.headers['Authorization'] = 'Bearer ' + value;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    // console.log(error.response.status)
    // if(error?.response.status === 401){
    //     logout()
    // }
    return Promise.reject(error);
});

export default instance;