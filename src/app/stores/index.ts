import {Instance, onPatch, types} from 'mobx-state-tree';
import LoaderStore from './LoaderStore';
import StageStore from './StageStore';
import ScreenStore from './ScreenStore';
import makeInspectable from "mobx-devtools-mst"
import UsersStore from "app/stores/UsersStore";
import GiftStore from "app/stores/GiftStore";

const RootStore = types
    .model('RootStore', {
        screenStore: types.optional(ScreenStore, {}),
        stageStore: types.optional(StageStore, {}),
        loaderStore: types.optional(LoaderStore, {}),
        usersStore: types.optional(UsersStore, {}),
        giftStore: types.optional(GiftStore, {}),
    })

export type RootStoreType = Instance<typeof rootStore>

const rootStore = RootStore.create();

//debug store
onPatch(rootStore, patch => {
    console.log(patch);
});

makeInspectable(rootStore); // MST dev tools

export default rootStore;
