import {Instance, types} from "mobx-state-tree";

// export const CityModel = types
//     .model('CityModel', {
//         id: 0,
//         title: ''
//     });

const User = types
    .model('UserStore', {
        id: 0,
        first_name: '',
        last_name: '',
        // sex: 0,
        // city: types.optional(CityModel, {}),
        // photo_100: '',
        // photo_max_orig: '',
        // bdate: '',
        photo_200: '',
        // timezone: 0,
    })
    .actions(self => ({}));

export interface IUser extends Instance<typeof User> {
};

const UsersStore = types
    .model('UserStore', {
        users: types.array(User),
        user: types.optional(User, {
            id: 0,
            first_name: '',
            last_name: '',
            photo_200: '',
        }),
    })
    .actions(self => ({
            setUser(user: IUser) {
                self.user = user;
            }
        })
    );

export interface IUsers extends Instance<typeof UsersStore> {
};

export default UsersStore;
