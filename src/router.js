import React from 'react'
import {Router} from 'dva/router'

import App from './system/app/router'
import pushRoutes from './system/router';

export default function({history, app}) {

    const routes = {
        component: App,
        childRoutes: [
            {
                path: '/home',
                getComponent(nextState, cb) {
                    require.ensure([], require => {
                        cb(null, require('./home/HomePage'))
                    })
                }
            }
        ]
    };

    return <Router history={history} routes={pushRoutes(routes)}/>
}
