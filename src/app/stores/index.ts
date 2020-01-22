import {onPatch, types} from 'mobx-state-tree';
import ScreenStore from './ScreenStore';
import makeInspectable from "mobx-devtools-mst";
import UserStore from "app/stores/UserStore";

const RootStore = types
    .model('RootStore', {
        screenStore: types.optional(ScreenStore, {}),
        userStore: types.optional(UserStore, {}),
    });
const rootStore = RootStore.create();

onPatch(rootStore, patch => {
    console.log(patch); // writes in console.log every changes in the state
});
makeInspectable(rootStore); // MST dev tools

export default rootStore;
