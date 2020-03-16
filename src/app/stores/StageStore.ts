import {cast, Instance, types} from 'mobx-state-tree';
import stage1 from "@img/stage1.png";
import stage2 from "@img/stage2.png";
import stageExpert from "@img/stage_expert.png";

export enum StageImageEnum {
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
        stageImage: StageImageEnum.expert,
        nextStage: types.optional(Stage, {
            id: 0,
            name: '',
            score: 0,
        }),
        stage: types.optional(Stage, {
            id: 0,
            name: '',
            score: 0
        }),
        page: 0,
        last_page: types.maybeNull(types.integer)
    })
    .views(self => ({}))
    .actions(self => ({
        setListStages(listStages: StageModel[]) {
            self.listStages = cast(listStages);
        },
        toggleModalStage(show: boolean) {
            self.showModalStage = show;
        },
        setScore(score: number) {
            self.stage.score = score;
        },
        setStage(stage: StageModel) {
            self.stage = stage;
            const next: any = self.listStages.find((stage) => stage.score > stage.score);
            if (next) self.nextStage = next[0];
        },
        setPage(page: number, last_page: number) {
            self.page = page;
            self.last_page = last_page;
        },
    }));

export type StageStoreType = Instance<typeof StageStore>

export default StageStore;
