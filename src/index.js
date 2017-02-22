import dva from 'dva';

import './system/contents/index.html';
import './system/contents/index.less';

import {useRouterHistory} from 'dva/router';
import {createHashHistory} from 'history';

// 1. Initialize
const app = dva({
    history: useRouterHistory(createHashHistory)({queryKey: false})
});

// 2. Model
app.model(require('./system/app/AppModel'));
app.model(require('./system/app/StatusModel'));

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
