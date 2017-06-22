import 'react-hot-loader/patch';
import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import {BrowserRouter} from 'react-router-dom';

import {basename} from 'config';
import App from 'components/App';


const renderApp = () => (
  <BrowserRouter basename={basename}>
    <App/>
  </BrowserRouter>
);

const root = document.getElementById('app');
render(renderApp(), root);

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App');
    render(renderApp(), root);
  })
}
