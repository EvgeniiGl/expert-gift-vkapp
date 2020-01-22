import {Instance, types} from "mobx-state-tree";

export enum UserEnum {
    'MainPage',
    'Profile',
    'Score',
    'Status',
    'ListGift',
}

export const CityModel = types
    .model('CityModel', {
        id: 0,
        title: '',
    });

export const UserModel = types
    .model('UserModel', {
        id: 0,
        first_name: '',
        last_name: '',
        sex: 0,
        city: types.optional(CityModel, {}),
        photo_100: '',
        photo_max_orig: '',
        bdate: '',
        photo_200: '',
        timezone: 0,
    });

export interface IUserModel extends Instance<typeof UserModel> { };

const UserStore = types
    .model('TodoStore', {
        user: types.optional(UserModel, {}),
    })
    .actions(self => ({
        setUser(user: Instance<typeof UserModel>) {
            self.user = user;
        },
    }));

export default UserStore;
