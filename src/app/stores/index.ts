import {onPatch, types} from 'mobx-state-tree';
import TodoStore from './TodoStore';
import ScreenStore, {ScreenEnum} from './ScreenStore';
import makeInspectable from "mobx-devtools-mst";

const RootStore = types
    .model('RootStore', {
        todoStore: types.optional(TodoStore, {
            todos: [],
            test: 0,
        }),
        screenStore: types.optional(ScreenStore, {
            currentScreen: ScreenEnum.MainPage,
            test: 0,
        }),
    });
const rootStore = RootStore.create();

onPatch(rootStore, patch => {
    console.log(patch); // writes in console.log every changes in the state
});
makeInspectable(rootStore); // MST dev tools

export default rootStore;
