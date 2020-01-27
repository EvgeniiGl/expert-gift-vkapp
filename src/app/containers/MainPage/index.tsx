import React from 'react';
import {useStore} from 'app/context/store';
import {observer} from 'mobx-react-lite';
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style';
import avatar from '@img/avatar.svg';
import {IUserModel} from "app/stores/UserStore";

const MainPage = observer(function (props) {
    const {screenStore, userStore} = useStore();
    const user: IUserModel = userStore.user;

    function watchGifts() {
        screenStore.setScreen(ScreenEnum.ListGift);
    }

    return (
        <S.Container>
            <S.Title>Оцени идеи для подарка,<br/>стань экспертом!</S.Title>
            <S.WrapperUser>
                <S.Avatar src={userStore.user.photo_200 || avatar}/>
                <S.UserInfo>
                    <div>Рейтинг: {user.score} баллов</div>
                    <div>Ваш статус: {user.stage}</div>
                </S.UserInfo>
            </S.WrapperUser>
            <S.Button onClick={watchGifts}>Поехали</S.Button>
        </S.Container>
    );
});

export default MainPage;
