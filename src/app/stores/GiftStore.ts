import {cast, Instance, types} from 'mobx-state-tree';

// export const mockGifts = [
//     {
//         id: 1,
//         title: 'Обладатель паспорта. Паспортный кошелекПодарки к юбилеюКожа',
//         img: 'https://i.etsystatic.com/10097255/r/il/a6c8ad/1990722245/il_794xN.1990722245_a218.jpg',
//    mark:0,
//         saved:true
//     },
//     {
//         id: 41,
//         title: 'Подарок к летию. Золотой подарок юбилею',
//         img: 'https://i.etsystatic.com/20229932/r/il/64efc9/1938398183/il_794xN.1938398183_mv29.jpg',
//         mark:0,
//         saved:true
//     },
//     {
//         id: 21,
//         title: 'Годовщина подарок на годовщину обратного отсчета й',
//         img: 'https://i.etsystatic.com/12080724/r/il/f61aa8/1994981801/il_794xN.1994981801_fpeu.jpg',
//         mark:0,
//         saved:true
//     },
// ];

// const countSaveMarks = 0;

const Gift = types
    .model('Gift', {
        id: types.identifierNumber,
        title: '',
        img: '',
        mark: types.maybeNull(types.number),
        saved: types.maybe(types.boolean),
    })
    .actions(self => ({
        setMark(mark: 0 | 1) {
            self.mark = mark;
            self.saved = false;
        },
        setSave() {
            self.saved = true;
        }
    }));

export type GiftType = Instance<typeof Gift>

const GiftStore = types
    .model('GiftStore', {
        gifts: types.array(Gift),
    })
    .views(self => ({
            // get needSave() {
            //     return self.gifts.filter(gift => !!gift.saved).length + countSaveMarks <
            //         self.gifts.filter(gift => gift.mark !== null).length;
            // },
            // get needAdd() {
            //     return self.gifts.filter(gift => gift.mark === null).length < 5;
            // },
            // get giftsForSave() {
            //     return self.gifts.reduce(function (giftsForSave, gift) {
            //         if (gift.mark !== null && !gift.saved) {
            //             giftsForSave.push(gift);
            //         }
            //         return giftsForSave;
            //     }, []);
            //
            // }
            get savedGifts() {
                return self.gifts.filter(gift => gift.saved);

        }
    }))
    .actions(self => ({
        setGifts(gifts: GiftType[]) {
            self.gifts = cast(gifts);
            // self.gifts.replace(mocks)
        },
        attachGifts(gifts: GiftType[]) {
            const uniqueGifts:GiftType[] = self.gifts.concat(gifts).reduce((acc, value:any) => acc.some((i:GiftType) => i.id === value.id) ? acc : acc.concat(value), []);
            self.gifts.replace(uniqueGifts);
        },
    }));

export type GiftStoreType = Instance<typeof GiftStore>

export default GiftStore;
