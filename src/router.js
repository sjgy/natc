import React from 'react'
import {Router} from 'dva/router'

export default function({history, app}) {
    const routes = [
        {
            path: '/',
            getComponent(nextState, cb) {
                require.ensure([], require => {
                    cb(null, require('./system/index/IndexPage'))
                })
            }
        }, {
            path: '*',
            name: 'error',
            getComponent(nextState, cb) {
                require.ensure([], require => {
                    cb(null, require('./system/error/ErrorPage'))
                })
            }
        }
    ];
    return <Router history={history} routes={routes}/>
}
