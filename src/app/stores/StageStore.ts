import {cast, Instance, types} from 'mobx-state-tree';
import stage1 from "@img/stage1.png";
import stage2 from "@img/stage2.png";
import stageExpert from "@img/stage_expert.png";

export enum StageEnum {
    'one' = stage1, 'two' = stage2, 'expert' = stageExpert
}

export const Stage = types
    .model('Stage', {
        id: types.identifierNumber,
        name: '',
        score: 0,
    });

export interface StageModel extends Instance<typeof Stage> {
}

const StageStore = types
    .model('StageStore', {
        listStages: types.array(Stage),
        showModalStage: false,
        stage: StageEnum.expert,
        nextStage: types.optional(Stage, {
            id: 0,
            name: '',
            score: 0,
        })
    })
    .views(self => ({}))
    .actions(self => ({
        setListStages(listStages: StageModel[]) {
            self.listStages = cast(listStages);
        },
        setNextStage(currentStage: StageModel) {

        },
        toggleModalStage(show: boolean) {
            self.showModalStage = show;
        },
    }));

export type StageStoreType = Instance<typeof StageStore>

export default StageStore;
