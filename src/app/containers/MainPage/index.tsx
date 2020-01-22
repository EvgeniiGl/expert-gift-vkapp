import React from 'react';
import {useStore} from '../../context/store';
import {observer} from 'mobx-react-lite';
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style';
import avatar from '@img/avatar.svg';

const MainPage = observer(function (props) {
    const {screenStore, userStore} = useStore();

    function watchGifts() {
        screenStore.setScreen(ScreenEnum.ListGift);
    }

    if (screenStore.currentScreen !== ScreenEnum.MainPage) return null;
    return (
        <S.Container>
            <S.Title>Оцени идеи для подарка,<br/>стань экспертом!</S.Title>
            <S.WrapperUser>
                <S.Avatar src={userStore.user.photo_200 || avatar}/>
                <S.UserInfo>
                    <div>Рейтинг: 1356 баллов</div>
                    <div>Ваш статус: Новичок</div>
                </S.UserInfo>
            </S.WrapperUser>
            <S.Button onClick={watchGifts}>Поехали</S.Button>
        </S.Container>
    );
});

export default MainPage;
