import {App} from './app';
import React from 'react';
import ReactDOM from 'react-dom';
import {StoreContext} from 'app/context/store';
import store from 'app/stores/index';
import '@vkontakte/vkui/dist/vkui.css';

const Store: any = store;

ReactDOM.render(
    <StoreContext.Provider value={Store}>
        <App/>
    </StoreContext.Provider>,
    document.getElementById('root')
);

