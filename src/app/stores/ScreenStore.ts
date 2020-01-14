// import {onPatch, types} from "mobx-state-tree";
// import makeInspectable from "mobx-devtools-mst"; // Mobx State Tree dev tools
//
// export enum ScreenList {
//     'MainPage',
//     'Profile',
//     'Score',
//     'Status',
//     'ListGift',
// }
//
// export const ScreenStore = types.model({
//     currentScreen: ScreenList.MainPage
// }).actions(self => ({
//     setScreen(screen) {
//         self.currentScreen = screen;
//     },
// }))
//
// // Debugging tools
// onPatch(ScreenStore, patch => {
//     console.log(patch); // writes in console.log every changes in the state
// });
// makeInspectable(ScreenStore); // MST dev tools
