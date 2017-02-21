import request from '../utils/request';

import {stringify} from 'qs';

export async function queryUser(params) {
    return request('/api/user', {method: 'get'})
}

export function createUser(params) {
    return request('/api/users/create', {
        method: 'POST',
        headers: new Headers({"Content-Type": "application/x-www-form-urlencoded; charset=utf-8"}),
        body: stringify(222223)
    });
}
