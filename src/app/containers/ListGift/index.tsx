import React, {useEffect} from 'react';
import {useStore} from '../../context/store';
import {observer} from 'mobx-react-lite';
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style';
import Header from "app/core/components/Header";
import Slider from "react-slick";
import {GiftStoreType, GiftType} from "app/stores/GiftStore";
import {ModalStage, StageEnum} from "app/core/components/ModalStage";
import {GiftItem} from "app/containers/ListGift/components/gift_item";
import {HTTP} from "app/core/services/http";
import {API, ResponseType} from "app/core/services/api";
import {customAlert} from "app/core/services/alert";
import {UserModel} from "app/stores/UserStore";
import {vk_bridge} from "app/core/services/vk_bridge";

const ListGift = observer(function (props) {

    const store = useStore();
    const {screenStore: {setScreen}, userStore} = useStore();
    const giftStore: GiftStoreType = store.giftStore;
    const gifts: GiftType[] = giftStore.gifts;
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

    const up = (gift: GiftType) => {
        slider.slickNext();
        setTimeout(() => {
            gift.up();
        }, settings.speed);
    };

    const down = (gift: GiftType) => {
        slider.slickNext();
        setTimeout(() => {
            gift.down();
        }, settings.speed);
    };

    const addScoreRepost = async (gift: GiftType) => {
        const response = await API.post<ResponseType>("repost", gift);
        if (response.status) {
            user.addScore(response.data);
        } else {
            customAlert.danger('Не удалось добавить очки за репост!');
        }
    };

    const repost = async (gift: GiftType) => {
        // if (connect.supports("VKWebAppShowWallPostBox")) {
        //     connect.send("VKWebAppShowWallPostBox", {
        //         "message": `Эксперт подарков: Идея ${gift.title}! https://vk.com/siberia_handmade`,
        //         "attachments": `photo${gift.img}, https://vk.com/siberia_handmade`
        //     });
        // }

        const response = await vk_bridge.send("VKWebAppShowWallPostBox", {"message": "Hello!"});
        if (response.status) {
            addScoreRepost(gift);
        }
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
        const response = await HTTP.get<GiftType[]>('/gifts_new');
        if (response.data && response.data.length > 0) {
            giftStore.attachGifts(response.data);
        } else {
            customAlert.danger('Не удалось загрузить список подарков!');
        }
    };


    const list_gift = gifts.map((gift) => <GiftItem key={gift.id} gift={gift} up={up} down={down} repost={repost}/>);

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
