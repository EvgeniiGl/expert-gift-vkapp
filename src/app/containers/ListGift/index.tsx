import React, {useEffect, useState} from 'react';
import {useStore} from 'app/context/store';
import {observer} from 'mobx-react-lite';
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style';
import Header from "app/core/components/Header";
import Slider from "react-slick";
import {GiftStoreType, GiftType} from "app/stores/GiftStore";
import {ModalStage, StageEnum} from "app/core/components/ModalStage";
import {GiftItem} from "app/containers/ListGift/components/gift_item";
import {API, ResponseType} from "app/core/services/api";
import {customAlert} from "app/core/services/alert";
import {UserModel} from "app/stores/UserStore";
import {GiftMenu} from "app/containers/ListGift/components/gift_menu";
import {vk_bridge} from "app/core/services/vk_bridge";
import {HTTP} from "app/core/services/http";

const ListGift = observer(function (props) {

    const store = useStore();
    const screenStore = store.screenStore;
    const userStore: UserModel = store.userStore;
    const giftStore: GiftStoreType = store.giftStore;

    const [mark, toggleMark] = useState(null);
    const [currentGift, toggleGift] = useState(giftStore.gifts[0]);
    const [loadAttachGifts, setLoadAttachGifts] = useState(false);

    let slider = null;

    const settings = {
        dots: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        swipe: false,
        centerMode: true,
        infinite: false,
        arrows: false,
        beforeChange: (current, next) => {
            saveMark({id: giftStore.gifts[current].id, mark: mark});
            toggleGift(giftStore.gifts[next]);
            if (giftStore.gifts.length < current + 5 && !loadAttachGifts) {
                attachGifts();
            }
        },
    };

    const addScoreRepost = async (gift: GiftType) => {
        const response = await API.post<ResponseType>("repost", gift);
        if (response.status) {
            userStore.addScore(response.data);
        } else {
            customAlert.danger('Не удалось добавить очки за репост!');
        }
    };

    const setMark = async (mark: 0 | 1) => {
        toggleMark(mark);
        slider.slickNext();
        setTimeout(() => {
            // gift.setMark(mark);
        }, settings.speed);
        // if (giftStore.needSave) await saveMarks();
        // if (giftStore.needAdd) await attachGifts();
    };

    const repost = async () => {
        // if (connect.supports("VKWebAppShowWallPostBox")) {
        //     connect.send("VKWebAppShowWallPostBox", {
        //         "message": `Эксперт подарков: Идея ${gift.title}! https://vk.com/siberia_handmade`,
        //         "attachments": `photo${gift.img}, https://vk.com/siberia_handmade`
        //     });
        // }

        const response = await vk_bridge.send("VKWebAppShowWallPostBox", {"message": `Эксперт подарков! Идея: ${currentGift.title}! https://vk.com/siberia_handmade`});
        if (response.status) {
            addScoreRepost(currentGift);
        }
    };

    useEffect(() => {

        return () => {


        };
    }, []);

    // const saveMarks = async () => {
    //     const data = giftStore.giftsForSave;
    //     const response = await API.post<ResponseType>('/save_marks', data);
    //     if (response.status) {
    //         data.forEach((gift => {
    //             gift.setSave();
    //         }));
    //         userStore.setScore(response.data);
    //     } else {
    //         customAlert.danger('Не удалось сохранить оценки!');
    //     }
    // };

    const saveMark = async (data) => {
        const response = await API.post<ResponseType>('/save_marks', [data]);
        if (response.status) {
            userStore.setScore(response.data);
        } else {
            customAlert.danger('Не удалось сохранить оценки!');
        }
    };

    const attachGifts = async () => {
        setLoadAttachGifts(true);
        const response = await HTTP.get<GiftType[]>('/gifts_new');
        if (response.data && response.data.length > 0) {
            giftStore.attachGifts(response.data);
        } else {
            customAlert.danger('Не удалось загрузить список подарков!');
        }
        setLoadAttachGifts(false);
    };

    const list_gift = giftStore.gifts.map((gift) => {
        return <GiftItem key={gift.id}
                         gift={gift}/>;
    });

    return (
        <S.Container>
            <Header screen={ScreenEnum.ListGift} setScreen={screenStore.setScreen}/>
            <S.Main>
                <S.Title>{currentGift.title}</S.Title>
                <S.SliderContainer>
                    <Slider ref={c => (slider = c)} {...settings}>
                        {list_gift}
                    </Slider>
                </S.SliderContainer>
                <GiftMenu setMark={setMark} repost={repost}/>
            </S.Main>
            {giftStore.showModalStage &&
            <ModalStage stage={StageEnum.one} toggleModalStage={giftStore.toggleModalStage}/>}
        </S.Container>
    );
});

export default ListGift;
