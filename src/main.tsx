import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { createBrowserHistory } from 'history';
// import { TodoModel } from 'app/models';
import {App} from './app';

// default fixtures for TodoStore
// const defaultTodos = [
//   new TodoModel('Use Mobx'),
//   new TodoModel('Use React', true)
// ];

// prepare MobX stores
// const history = createBrowserHistory();
// const rootStore = createStores();

// render react DOM
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
