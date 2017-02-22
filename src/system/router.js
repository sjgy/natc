import React from 'react';

import AppContainer from './app/AppContainer'

const systemRouter = [
    {
        path: '/',
        getComponent(nextState, cb) {
            require.ensure([], require => {
                cb(null, require('./index/IndexPage'))
            })
        }
    }, {
        path: '/login',
        getComponent(nextState, cb) {
            require.ensure([], require => {
                cb(null, require('./auth/login/LoginPage'))
            })
        }
    }, {
        path: '/register',
        getComponent(nextState, cb) {
            require.ensure([], require => {
                cb(null, require('./auth/register/RegisterPage'))
            })
        }
    }
];

const pushRoutes = function(routes) {

    routes.push({
        path: '*',
        name: 'error',
        getComponent(nextState, cb) {
            require.ensure([], require => {
                cb(null, require('./error/ErrorPage'))
            })
        }
    });

    systemRouter.push({component: AppContainer, childRoutes: routes});

    return systemRouter;
}

export default pushRoutes;
