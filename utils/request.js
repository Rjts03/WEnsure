import axios from 'axios'
import config from '../config'

const {baseURL, ProdURL} = config

const getWithAxios = (endPoint, params=null) => {
    let paramstr = '';
    if (params) {
        const paramKeys = Object.keys(params)
        paramKeys.forEach((param, index) => {
            paramstr += param+'='+params[param];
            if (paramKeys.length > 1 && index < paramKeys.length - 1) paramstr += '&'
        })
    }
    const url = `${baseURL}${endPoint}?${paramstr}`
    return axios
            .get(url)
            .then(res => res.data)
            .catch(e => {
                return e
            });
};

const postWithAxios = (endPoint, body=null) => {
    return axios
            .post(`${baseURL}${endPoint}`, body)
            .then(res => res.data)
            .catch(e => e)
}

const delWithAxios = (endPoint, params=null) => {
    let paramstr = '';
    if (params)
    Object.keys(params).forEach(param => {
        paramstr += param+'='+params[param]+',';
    })
    return axios
            .delete(`${baseURL}${endPoint}/${paramstr}`)
            .then(res => res.data)
            .catch(e => e)
}


// GET
export const getAllPoliciesByUser = async (uid, setS, setE, setL) => {
    const r = await getWithAxios('policy', {uid})
    if (r.length > 0) {
        setS(r);
    }else {
        setE(r)
    }
    setL(false)
}

export const getPolicyById = async (pid, setS, setE, setL) => {
    const r = await getWithAxios('policy', {policy_id: pid});
    if (r.length === 1) {
        setS(r[0]);
    }else {
        setE(r)
    }
    setL(false)
}


// POST

export const createPolicy = async (body, setS, setE, setL) => {
    const r = await postWithAxios('policy', body)
    if (r) {
        setS(true)
    }else {
        setE(true)
    }
    setL(false)
}

export const registerUser = async (body, setS, setE, setL) => {
    const r = await postWithAxios('user', body)
    if(r) {
        setS(true)
    }else {
        setE(true)
    }
    setL(false)
}

// DELETE