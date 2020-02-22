import axios from 'axios'
import config from '../config'

const {baseURL, ProdURL} = config

const getWithAxios = (endPoint, param=null) => {
    return axios
            .get(`${baseURL}${endPoint}/${param}`)
            .then(res => res.data)
            .catch(e => e);
};

const postWithAxios = (endPoint, body=null) => {
    return axios
            .post(`${baseURL}${endPoint}`, body)
            .then(res => res.data)
            .catch(e => e)
}

const delWithAxios = (endPoint, param=null) => {
    return axios
            .delete(`${baseURL}${endPoint}/${param}`)
            .then(res => res.data)
            .catch(e => e)
}


// GET
export const getAllPoliciesByUser = (uid) => {

}


// POST



// DELETE