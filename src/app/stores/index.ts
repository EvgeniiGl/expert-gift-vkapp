import {Instance, onPatch, types} from 'mobx-state-tree';
import ScreenStore from './ScreenStore';
import makeInspectable from "mobx-devtools-mst";
import UserStore from "app/stores/UserStore";
import GiftStore from "app/stores/GiftStore";

const RootStore = types
    .model('RootStore', {
        screenStore: types.optional(ScreenStore, {}),
        userStore: types.optional(UserStore, {}),
        giftStore: types.optional(GiftStore, {}),
    }).actions(self => ({
        setUser(user: Instance<typeof UserStore>) {
            self.userStore = user;
        }
        })
    );
const rootStore = RootStore.create();

onPatch(rootStore, patch => {
    console.log(patch); // writes in console.log every changes in the state
});
makeInspectable(rootStore); // MST dev tools

export default rootStore;
