import {Instance, types} from "mobx-state-tree";

// export const CityModel = types
//     .model('CityModel', {
//         id: 0,
//         title: ''
//     });

const User = types
    .model('UserModel', {
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
        score: 0,
        top:0,
    })
    .actions(self => ({}));

export interface IUser extends Instance<typeof User> {
};

const UsersStore = types
    .model('UsersStore', {
        users: types.array(User),
        user: types.optional(User, {
            id: 0,
            first_name: '',
            last_name: '',
            photo_200: '',
            top:0,
        }),
    })
    .actions(self => ({
            setUser(user: IUser) {
                self.user = user;
            },
            setUsers(users: IUser[]) {
                self.users.replace(users);
            },
        })
    );

export interface IUsers extends Instance<typeof UsersStore> {
};

export default UsersStore;
