import React from "react";
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style';
import {useStore} from "app/context/store";
import {observer} from "mobx-react-lite";


export const ButtonStart: React.FC = observer(() => {

    const {screenStore, giftStore} = useStore();

    function watchGifts() {
        screenStore.setScreen(ScreenEnum.ListGift);
    }

    const disabled = giftStore.gifts.length === 0;

    return <S.Button disabled={disabled} onClick={disabled ? null : watchGifts}>Поехали</S.Button>;
});
