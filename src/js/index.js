import "core-js/stable";
import "regenerator-runtime/runtime";

import logger from './logger';

import '../css/index.scss';
import App from './components/App';

function renderApp() {
  new App(document.getElementById('appContainer'));
}

document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});

logger('it works well!');


