import './config/reactotron';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';
import Global from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Global />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
