import request from '../utils/request'

export async function queryUser(params) {
    return request('http://localhost:8989/v1/api/user', {method: 'get'})
}

export async function createUser(params) {
    console.log(params);
    return request('http://localhost:8989/v1/api/user', {
        method: 'post',
        data: params
    })
}
