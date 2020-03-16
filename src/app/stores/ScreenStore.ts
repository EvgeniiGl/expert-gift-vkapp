import {types} from 'mobx-state-tree';

export enum ScreenEnum {
    'MainPage',
    'Profile',
    'Stage',
    'ListGift',
}

const ScreenStore = types
    .model('ScreenStore', {
        currentScreen: ScreenEnum.Stage,
    })
    .actions(self => ({
        setScreen(screen: ScreenEnum) {
            self.currentScreen = screen;
        },
    }));

export default ScreenStore;
