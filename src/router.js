import React from 'react'
import {Router} from 'dva/router'

import pushRoutes from './system/router';

export default function({history, app}) {

    const routes = [
        {
            path: '/home',
            getComponent(nextState, cb) {
                require.ensure([], require => {
                    cb(null, require('./home/HomePage'))
                })
            }
        }, {
            path: '/file',
            getComponent(nextState, cb) {
                require.ensure([], require => {
                    cb(null, require('./files/FilePage/FilePage'))
                })
            }
        }
    ]

    return <Router history={history} routes={pushRoutes(routes)}/>
}
