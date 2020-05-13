import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import configureStore from './modules/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={() => <p>ss</p>} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
