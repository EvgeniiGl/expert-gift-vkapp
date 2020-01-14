import {types} from 'mobx-state-tree';

export enum ScreenEnum {
    'MainPage',
    'Profile',
    'Score',
    'Status',
    'ListGift',
}

const ScreenStore = types
    .model('TodoStore', {
        currentScreen: types.number,
        test:types.number,
    })
    .actions(self => ({
        setScreen(screen: ScreenEnum) {
            self.currentScreen = screen;
        },
        setTest() {
            self.test += 1;
        }
    }));

export default ScreenStore;
