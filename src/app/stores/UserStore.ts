import {Instance, types} from "mobx-state-tree";

export const Stage = types
    .model('StageModel', {
        id: 0,
        name: '',
    });

export interface StageModel extends Instance<typeof Stage> {
};

export const CityModel = types
    .model('CityModel', {
        id: 0,
        title: '',
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
        score: 0,
        stage: types.optional(Stage, {id:0,name:"Новичек"})
    })
    .actions(self => ({
        setScore(score: number) {
            self.score = score;
        },
        setStage(stage:  StageModel ) {
            self.stage = stage;
        },
        addScore(score:number) {
            self.score += score;
        },
    }));

export interface UserModel extends Instance<typeof UserStore> {
};

export default UserStore;
