import React, {useEffect, useState} from 'react';
import {useStore} from 'app/context/store';
import {observer} from 'mobx-react-lite';
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style';
import Header from "app/core/components/Header";
import Slider from "react-slick";
import {GiftStoreType, GiftType} from "app/stores/GiftStore";
import {GiftItem} from "app/containers/ListGift/components/gift_item";
import {API} from "app/core/services/api";
import {customAlert} from "app/core/components/alert";
import {GiftMenu} from "app/containers/ListGift/components/gift_menu";
import {vk_bridge} from "app/core/services/vk_bridge";
import {StageStoreType} from "app/stores/StageStore";

const ListGift = observer(function (props) {

    const store = useStore();
    const screenStore = store.screenStore;
    const giftStore: GiftStoreType = store.giftStore;
    const stageStore: StageStoreType = store.stageStore;

    const [mark, toggleMark] = useState<0 | 1>();
    const [currentGift, toggleGift] = useState(giftStore.gifts[0]);
    const [loadAttachGifts, setLoadAttachGifts] = useState(false);

    let slider: any = null;

    const settings = {
        dots: false,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: "ondemand",
        swipe: false,
        centerMode: true,
        infinite: false,
        arrows: false,
        beforeChange: (current: number, next: number) => {
            if (mark === undefined) return;
            saveMark({id: giftStore.gifts[current].id, mark: mark});
            toggleGift(giftStore.gifts[next]);
            if (giftStore.gifts.length < current + 5 && !loadAttachGifts) {
                attachGifts();
            }
        },
    };

    const addScoreRepost = async (gift: GiftType) => {
        const response = await API.post<number>("repost", gift);
        if (response.status) {
            stageStore.setScore(response.data);
        } else {
            customAlert.danger('Не удалось добавить очки за репост!');
        }
    };


    const setMark = async (mark: 0 | 1) => {
        toggleMark(mark);
        slider.slickNext();
    };

    const repost = async () => {
        const response = await vk_bridge.send("VKWebAppShowWallPostBox", {"message": `Эксперт подарков! Идея: ${currentGift.title}! https://vk.com/siberia_handmade`});
        if (response.status) {
            addScoreRepost(currentGift);
        }
    };

    useEffect(() => {

        return () => {


        };
    }, []);

    const saveMark = async (data: { id: number, mark: 0 | 1 }) => {
        const response = await API.post<number>('/save_marks', [data]);
        if (response.status) {
            stageStore.setScore(response.data);
            if (stageStore.nextStage.score <= response.data) {
                stageStore.setStage(stageStore.nextStage);
                stageStore.setScore(response.data);
                stageStore.toggleModalStage(true);
            }
        } else {
            customAlert.danger('Не удалось сохранить оценки!');
        }
    };

    const attachGifts = async () => {
        setLoadAttachGifts(true);
        const response = await API.get<GiftType[]>('/gifts_new');
        if (response.status) {
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
                    {/*
                    // @ts-ignore */}
                    <Slider ref={c => (slider = c)} {...settings}>
                        {list_gift}
                    </Slider>
                </S.SliderContainer>
                <GiftMenu setMark={setMark} repost={repost}/>
            </S.Main>
        </S.Container>
    );
});

export default ListGift;
