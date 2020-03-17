import {types} from 'mobx-state-tree';

export enum ScreenEnum {
    'MainPage',
    'Profile',
    'Stage',
    'ListGift',
}

const ScreenStore = types
    .model('ScreenStore', {
        currentScreen: ScreenEnum.MainPage,
    })
    .actions(self => ({
        setScreen(screen: ScreenEnum) {
            self.currentScreen = screen;
        },
    }));

export default ScreenStore;
