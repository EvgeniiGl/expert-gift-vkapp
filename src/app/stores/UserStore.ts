import {Instance, types} from "mobx-state-tree";
import {Stage, StageModel} from "app/stores/StageStore";

export const CityModel = types
    .model('CityModel', {
        id: 0,
        title: ''
    });

export const UserStore = types
    .model('UserStore', {
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
    })
    .actions(self => ({
    }));

export interface UserModel extends Instance<typeof UserStore> {
};

export default UserStore;
