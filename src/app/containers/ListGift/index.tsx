import React, {useEffect} from 'react';
import {useStore} from '../../context/store';
import {observer} from 'mobx-react-lite';
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style';
import Header from "app/components/Header";
import Slider from "react-slick";
import like from '@img/like.svg';
import like_white from '@img/like_white.svg';
import dislike from '@img/dislike.svg';
import dislike_white from '@img/dislike_white.svg';
import {IGift} from "app/stores/GiftStore";
import {ModalStage, StageEnum} from "app/components/ModalStage";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
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
    return (
        <S.Container>
            <Header screen={ScreenEnum.ListGift} setScreen={setScreen}/>
            <S.SliderContainer>
                <Slider ref={c => (slider = c)} {...settings}>
                    {gifts.map((gift) => <S.Wrapper key={gift.id}>
                        <h2>{gift.title}</h2>
                        <S.ImgGift src={gift.img_url}/>
                        <S.WrapperScore>
                            <S.CircleLike onClick={() => up(gift)} active={!!gift.rate}>
                                <S.Like src={gift.rate ? like_white : like}/>
                            </S.CircleLike>
                            <S.CircleDislike onClick={() => down(gift)} active={gift.rate === false}>
                                <S.Like src={gift.rate === false ? dislike_white : dislike}/>
                            </S.CircleDislike>
                        </S.WrapperScore>
                    </S.Wrapper>)}
                </Slider>
            </S.SliderContainer>
            {giftStore.showModalStage &&
            <ModalStage stage={StageEnum.one} toggleModalStage={giftStore.toggleModalStage}/>}
        </S.Container>
    );
});

export default ListGift;
