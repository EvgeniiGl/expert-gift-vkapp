import React, {useEffect} from 'react';
import {useStore} from '../../context/store';
import {observer} from 'mobx-react-lite';
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style';
import Header from "app/core/components/Header";
import Slider from "react-slick";
import {IGift} from "app/stores/GiftStore";
import {ModalStage, StageEnum} from "app/core/components/ModalStage";
import {GiftItem} from "app/containers/ListGift/components/gift_item";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
};

const ListGift = observer(function (props) {
    const {screenStore: {setScreen}, giftStore} = useStore();
    const gifts: IGift[] = giftStore.gifts;

    let slider = null;

    const up = (gift) => {
        slider.slickNext();
        setTimeout(() => {
            gift.assess(true);
        }, settings.speed);
    };

    const down = (gift) => {
        slider.slickNext();
        setTimeout(() => {
            gift.assess(false);
        }, settings.speed);
    };
    useEffect(() => {
        console.log('useEffect run-- ',);
        return () => {

            console.log('useEffect unmount-- ',);
        };
    }, []);

    const list_gift = gifts.map((gift) => <GiftItem key={gift.id} gift={gift} up={up} down={down}/>);

    return (
        <S.Container>
            <Header screen={ScreenEnum.ListGift} setScreen={setScreen}/>
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
