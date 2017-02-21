import request from '../utils/request';

export async function queryUser(params) {
    return request('/api/user', {method: 'get'})
}

export async function createUser(params) {
    return request('/api/users/create', {
        method: 'post',
        body: params
    });
}
