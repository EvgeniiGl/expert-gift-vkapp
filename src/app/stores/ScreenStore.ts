import {observable} from "mobx";

export enum Screen {
    'MainPage',
    'Profile',
    'Score',
    'Status',
    'ListGift',
}


export class ScreenStore{
@observable screen:Screen = Screen.MainPage
}

export default new ScreenStore();