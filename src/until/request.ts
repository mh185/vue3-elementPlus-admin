import axios from "axios";

import { getToken } from "./auth";
const token = getToken()
const service = axios.create({
    baseURL: "/local-api",
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        if (token) {
            config.headers['Token'] = getToken()
        }
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default service