import {queryUser, createUser} from '../services/app';
import {routerRedux} from 'dva/router';
import {parse} from 'qs';

export default {
    namespace : 'app',
    state : {
        isAuthenticatedenticated: false,
        account: {
            username: null,
            ability: null,
            user_id: null,
            email: null
        },
        menus: []
    },
    subscriptions : {
        setup({dispatch}) {
            dispatch({type: 'menus'});
        }
    },
    effects : {
        *auth({
            payload
        }, {call, put}) {

            if (payload.username === "eh" && payload.password === "123456") {
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
            }

            yield put(routerRedux.push('/home'));
        },
        *menus({}, {put}) {

            yield put({
                type: 'menulist',
                payload: {
                    menus: [
                        {
                            key: 'home',
                            name: '仪表盘',
                            icon: 'laptop'
                        }, {
                            key: 'file',
                            name: '用户管理',
                            icon: 'file'
                        }, {
                            key: 'book',
                            name: 'UI组件',
                            icon: 'camera-o'
                        }, {
                            key: 'navigation',
                            name: '测试导航',
                            icon: 'setting',
                            child: [
                                {
                                    key: 'navigation1',
                                    name: '二级导航1'
                                }, {
                                    key: 'navigation2',
                                    name: '二级导航2',
                                    child: [
                                        {
                                            key: 'navigation21',
                                            name: '三级导航1'
                                        }, {
                                            key: 'navigation22',
                                            name: '三级导航2'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            });
        },
        *register({
            payload
        }, {put, call}) {
            const datas = yield call(createUser, parse(payload));
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
                isAuthenticated: true
            };
        },
        menulist: function(state, {payload}) {
            const {menus} = payload;
            return {
                ...state,
                menus:menus
            };
        },
        hasToken: function(state) {
            return {
                ...state,
                isAuthenticated: true
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
                isAuthenticated: false,
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
