import {Instance, onPatch, types} from 'mobx-state-tree';
import LoaderStore from './LoaderStore';
import StageStore from './StageStore';
import ScreenStore from './ScreenStore';
import makeInspectable from "mobx-devtools-mst"
import UserStore from "app/stores/UserStore";
import GiftStore from "app/stores/GiftStore";

const RootStore = types
    .model('RootStore', {
        screenStore: types.optional(ScreenStore, {}),
        stageStore: types.optional(StageStore, {}),
        loaderStore: types.optional(LoaderStore, {}),
        userStore: types.optional(UserStore, {}),
        giftStore: types.optional(GiftStore, {}),
    }).actions(self => ({
            setUser(user: Instance<typeof UserStore>) {
                self.userStore = user;
            }
        })
    );

export type RootStoreType = Instance<typeof rootStore>

const rootStore = RootStore.create();

onPatch(rootStore, patch => {
    console.log(patch);
});

makeInspectable(rootStore); // MST dev tools

export default rootStore;
