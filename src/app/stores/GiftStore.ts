import {types} from 'mobx-state-tree';

export enum ScreenEnum {
    'MainPage',
    'Profile',
    'Score',
    'Status',
    'ListGift',
}

const ScreenStore = types
    .model('ScreenStore', {
        currentScreen: ScreenEnum.ListGift,
    })
    .actions(self => ({
        setScreen(screen: ScreenEnum) {
            self.currentScreen = screen;
        },
    }));

export default ScreenStore;
