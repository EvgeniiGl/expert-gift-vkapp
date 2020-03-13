import {Instance, types} from 'mobx-state-tree';

const LoaderStore = types
    .model('LoaderStore', {
        showLoader: false
    })
    .actions(self => ({
        toggleLoader(show: boolean) {
            self.showLoader = show;
        },
    }));

export type LoaderStoreType = Instance<typeof LoaderStore>

export default LoaderStore;
