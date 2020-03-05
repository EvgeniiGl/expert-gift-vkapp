import {cast, Instance, types} from 'mobx-state-tree';

// const mocks: GiftType[] = [
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
        mark: types.maybeNull(types.number),
        saved: types.maybe(types.boolean),
    })
    .actions(self => ({
        up() {
            self.mark = 1;
            self.saved = false;
        },
        down() {
            self.mark = 0;
            self.saved = false;
        },
        setSave() {
            self.saved = true;
        }
    }));

export type GiftType= Instance<typeof Gift>

const GiftsArray = types.array(Gift);

const GiftStore = types
    .model('GiftStore', {
        gifts: GiftsArray,
        showModalStage: false
    })
    .views(self => {
        return {
            get needSave() {
                return self.gifts.filter(gift => !!gift.saved).length + 5 <
                    self.gifts.filter(gift => gift.mark !== null).length;
            },
            get giftsForSave() {
                return self.gifts.reduce(function (giftsForSave, gift) {
                    if (gift.mark !== null && !gift.saved) {
                        giftsForSave.push(gift);
                    }
                    return giftsForSave;
                }, []);

            }
        };
    })
    .actions(self => ({
        getGifts(gifts: GiftType[]) {
            self.gifts = cast(gifts);
            // self.gifts.replace(mocks)
        },
        attachGifts(gifts: GiftType[]) {
            self.gifts.replace(self.gifts.concat(gifts));
        },
        toggleModalStage(show: false) {
            self.showModalStage = show;
        },
    }));

export type GiftStoreType = Instance<typeof GiftStore>

export default GiftStore;
