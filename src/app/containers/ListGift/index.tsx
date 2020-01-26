import React from 'react';
import {useStore} from '../../context/store';
import {observer} from 'mobx-react-lite';
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style';
import Header from "app/components/Header";

const ListGift = observer(function (props) {
    const {screenStore: {setScreen, currentScreen}} = useStore();
    if (currentScreen !== ScreenEnum.ListGift) return null;

    console.log('ListGift-- ',);
    return (
        <S.Container>
            <Header screen={ScreenEnum.ListGift} setScreen={setScreen}/>
<div>

</div>
        </S.Container>
    );
});

export default ListGift;
