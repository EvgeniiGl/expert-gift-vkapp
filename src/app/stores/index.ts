// import {History} from 'history';
// import {TodoModel} from 'app/models';
// import {TodoStore} from './TodoStore';
// import RouterStore from './RouterStore';
import ScreenStore from './ScreenStore';

// import {STORE_ROUTER} from 'app/constants';

export function createStores() {
    // const todoStore = new TodoStore(defaultTodos);
    // const routerStore = new RouterStore();
    return {
        // [STORE_TODO]: todoStore,
        // [STORE_ROUTER]: routerStore
        ScreenStore: ScreenStore
    };
}
