import React from 'react';
import {Router, Route} from 'dva/router';
import IndexPage from './routes/IndexPage';

import TodoPage from './routes/TodoPage.js';

function RouterConfig({history}) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}/>
      <Route path="/TodoPage/:id" component={TodoPage}/>
    </Router>
  );
}

export default RouterConfig;
