import api from "./services"

const login = async (body) => {
    //await api.get('/sanctum/csrf-cookie')
    return await api.post('/api/login', body)
}
export default {
    login
}
