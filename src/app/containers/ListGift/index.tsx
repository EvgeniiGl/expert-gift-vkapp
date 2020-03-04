import React, {useEffect} from 'react';
import {useStore} from '../../context/store';
import {observer} from 'mobx-react-lite';
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style';
import Header from "app/core/components/Header";
import Slider from "react-slick";
import {GiftStoreType, IGift} from "app/stores/GiftStore";
import {ModalStage, StageEnum} from "app/core/components/ModalStage";
import {GiftItem} from "app/containers/ListGift/components/gift_item";
import {HTTP} from "app/core/services/http";
import {customAlert} from "app/core/services/alert";
import {UserModel} from "app/stores/UserStore";

const ListGift = observer(function (props) {

    const store = useStore();
    const {screenStore: {setScreen}, userStore} = useStore();
    const giftStore: GiftStoreType = store.giftStore;
    const gifts: IGift[] = giftStore.gifts;
    const user: UserModel = userStore;

    let slider = null;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        swipe: false,
        beforeChange: (current) => {
            if (current > giftStore.gifts.length - 5) {
                attachGifts();
            }
        },

    };

    const up = (gift) => {
        slider.slickNext();
        setTimeout(() => {
            gift.assess(1);
        }, settings.speed);
    };

    const down = (gift) => {
        slider.slickNext();
        setTimeout(() => {
            gift.assess(0);
        }, settings.speed);
    };

    useEffect(() => {

        return () => {


        };
    }, []);

    const saveMarks = async () => {
        const data = giftStore.giftsForSave;
        const response = await HTTP.post<{ ok: boolean }>('/save_marks', data);
        if (response.data && response.data.ok) {
            data.forEach((gift => {
                gift.setSave();
            }));
        } else {
            customAlert.danger('Не удалось сохранить оценки!');
        }
    };

    if (giftStore.needSave) {
        saveMarks();
    }

    const attachGifts = async () => {
        await saveMarks();
        const response = await HTTP.get<IGift[]>('/gifts_new');
        if (response.data && response.data.length > 0) {
            giftStore.attachGifts(response.data);
        } else {
            customAlert.danger('Не удалось загрузить список подарков!');
        }
    };


    const list_gift = gifts.map((gift) => <GiftItem key={gift.id} gift={gift} up={up} down={down}/>);

    return (
        <S.Container>
            <Header score={user.score} screen={ScreenEnum.ListGift} setScreen={setScreen}/>
            <S.SliderContainer>
                <Slider ref={c => (slider = c)} {...settings}>
                    {list_gift}
                </Slider>
            </S.SliderContainer>
            {giftStore.showModalStage &&
            <ModalStage stage={StageEnum.one} toggleModalStage={giftStore.toggleModalStage}/>}
        </S.Container>
    );
});

export default ListGift;
