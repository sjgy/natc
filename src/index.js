import './contents/index.html';
import './contents/index.less';
import dva from 'dva'
import { useRouterHistory } from 'dva/router';
import { createHashHistory } from 'history';

// 1. Initialize
const app = dva({
  history: useRouterHistory(createHashHistory)({ queryKey: false }),
});

// 2. Model
app.model(require('./models/app'))

// 3. Router
app.router(require('./router'))

// 4. Start
app.start('#root')
