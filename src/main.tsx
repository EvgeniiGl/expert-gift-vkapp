import {App} from './app';
import React from 'react';
import ReactDOM from 'react-dom';
import {StoreContext} from 'app/context/store';
import store from 'app/stores/index';
import '@vkontakte/vkui/dist/vkui.css';


ReactDOM.render(
    <StoreContext.Provider value={store}>
        <App/>
    </StoreContext.Provider>,
    document.getElementById('root')
);

