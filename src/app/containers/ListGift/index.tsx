import React, {useEffect, useState} from 'react';
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
import {GiftMenu} from "app/containers/ListGift/components/gift_menu";

const ListGift = observer(function (props) {

    const store = useStore();
    const screenStore = store.screenStore;
    const userStore: UserModel = store.userStore;
    const giftStore: GiftStoreType = store.giftStore;

    const [disable, setDisable] = useState(false);

    let slider = null;

    const settings = {
        dots: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        swipe: false,
        centerMode: true,
        infinite: true,
        arrows: false,
    };


    // const addScoreRepost = async (gift: GiftType) => {
    //     const response = await API.post<ResponseType>("repost", gift);
    //     if (response.status) {
    //         userStore.addScore(response.data);
    //     } else {
    //         customAlert.danger('Не удалось добавить очки за репост!');
    //     }
    // };

    const setMark = async (mark: 0 | 1) => {
        slider.slickNext();
        setTimeout(() => {
            // gift.setMark(mark);
        }, settings.speed);
        if (disable) return;
        setDisable(true);
        if (giftStore.needSave) await saveMarks();
        if (giftStore.needAdd) await attachGifts();
        setDisable(false);
    };

    const repost = async () => {
        // if (connect.supports("VKWebAppShowWallPostBox")) {
        //     connect.send("VKWebAppShowWallPostBox", {
        //         "message": `Эксперт подарков: Идея ${gift.title}! https://vk.com/siberia_handmade`,
        //         "attachments": `photo${gift.img}, https://vk.com/siberia_handmade`
        //     });
        // }

        // const response = await vk_bridge.send("VKWebAppShowWallPostBox", {"message": `Эксперт подарков! Идея: ${gift.title}! https://vk.com/siberia_handmade`});
        // if (response.status) {
        //     addScoreRepost(gift);
        // }
    };

    useEffect(() => {

        return () => {


        };
    }, []);

    const saveMarks = async () => {
        const data = giftStore.giftsForSave;
        const response = await API.post<ResponseType>('/save_marks', data);
        if (response.status) {
            data.forEach((gift => {
                gift.setSave();
            }));
            userStore.setScore(response.data);
        } else {
            customAlert.danger('Не удалось сохранить оценки!');
        }
    };

    const attachGifts = async () => {
        const response = await HTTP.get<GiftType[]>('/gifts_new');
        if (response.data && response.data.length > 0) {
            giftStore.attachGifts(response.data);
        } else {
            customAlert.danger('Не удалось загрузить список подарков!');
        }
    };

    const list_gift = giftStore.gifts.map((gift) => {
        return <GiftItem key={gift.id}
                         gift={gift}/>;
    });

    return (
        <S.Container>
            <Header score={userStore.score} screen={ScreenEnum.ListGift} setScreen={screenStore.setScreen}/>
            <S.Main>
                <S.Title>{'props.gift.title'}</S.Title>
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
