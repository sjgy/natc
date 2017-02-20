import './system/contents/index.html';
import './system/contents/index.less';
import dva from 'dva'
import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';

// 1. Initialize
const app = dva({
  history: useRouterHistory(createHashHistory)({ queryKey: false }),
});

// 2. Model
app.model(require('./system/app/model'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
