import {queryUser, createUser} from '../services/app';
import {routerRedux} from 'dva/router';
import {parse} from 'qs';

export default {
    namespace : 'app',
    state : {
        isAuth: true,
        account: {
            username: null,
            ability: null,
            user_id: null,
            email: null
        }
    },
    subscriptions : {

        setup({dispatch}) {}
    },
    effects : {
        *auth({
            payload
        }, {call, put}) {
            yield put({
                type: 'authSuccess',
                payload: {
                    account: {
                        username: "eh",
                        ability: "admin",
                        user_id: "a128736d",
                        email: "eh@sjgy.com"
                    }
                }
            });
            yield put(routerRedux.push('/home'));
        },
        *register({
            payload
        }, {put, call}) {
            const datas = yield call(createUser, parse(payload));
            console.log(datas);
        },
        *logout({}, {put}) {
            yield put({type: 'authFail'});
            yield put(routerRedux.push('/'));
        }
    },
    reducers : {
        authSuccess: function(state, {payload}) {
            const {account} = payload;
            return {
                ...state,
                account,
                isAuth: true
            };
        },
        hasToken: function(state) {
            return {
                ...state,
                isAuth: true
            };
        },
        queryUserSuccess: function(state, {payload}) {
            const {account} = payload;
            return {
                ...state,
                account
            };
        },
        authFail: function(state) {
            return {
                ...state,
                isAuth: false,
                account: {
                    username: null,
                    ability: null,
                    user_id: null,
                    email: null
                }
            };
        }
    }
}
