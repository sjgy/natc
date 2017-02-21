import {routerRedux} from 'dva/router';

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
    effects : {
        *logout({}, {put}){
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
