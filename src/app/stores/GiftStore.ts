import {cast, types} from 'mobx-state-tree';

export interface IGift {
    id: number,
    title: string,
    img: string,
    rate?: boolean,
}

// const mocks: IGift[] = [
//     {
//         id: 1,
//         title: 'Обладатель паспорта. Паспортный кошелекПодарки к юбилеюКожа',
//         img_url: 'https://i.etsystatic.com/10097255/r/il/a6c8ad/1990722245/il_794xN.1990722245_a218.jpg',
//     },
//     {
//         id: 41,
//         title: 'Подарок к летию. Золотой подарок юбилею',
//         img_url: 'https://i.etsystatic.com/20229932/r/il/64efc9/1938398183/il_794xN.1938398183_mv29.jpg',
//     },
//     {
//         id: 21,
//         title: 'Годовщина подарок на годовщину обратного отсчета й',
//         img_url: 'https://i.etsystatic.com/12080724/r/il/f61aa8/1994981801/il_794xN.1994981801_fpeu.jpg',
//     },
// ];

const Gift = types
    .model('Gift', {
        id: types.identifierNumber,
        title: '',
        img: '',
        rate: types.maybe(types.boolean),
    })
    .actions(self => ({
        assess(value: boolean) {
            console.log('log-- ',);
            self.rate = value;
        }
    }));

const GiftsArray = types.array(Gift);

const GiftStore = types
    .model('GiftStore', {
        gifts: GiftsArray,
        showModalStage: false
    })
    .actions(self => ({
        getGifts(gifts: IGift[]) {
            self.gifts = cast(gifts);
            // self.gifts.replace(mocks)
        },
        toggleModalStage(show: false) {
            self.showModalStage = show;
        }
    }));

export default GiftStore;
