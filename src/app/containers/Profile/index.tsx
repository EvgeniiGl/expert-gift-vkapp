import React from 'react';
import {useStore} from '../../context/store';
import {observer} from 'mobx-react-lite';
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style';
import avatar from '@img/avatar.svg';
import Header from "app/components/Header";
import {ButtonStart} from "app/core/button_start";

const Profile = observer(function (props) {
    const {screenStore:{setScreen, currentScreen}, userStore} = useStore();
    if (currentScreen !== ScreenEnum.Profile) return null;

console.log('Profile-- ',);
    return (
        <S.Container>
            <Header screen={ScreenEnum.Profile} setScreen={setScreen}/>
            <S.WrapperUser>
                <S.Avatar src={userStore.user.photo_200 || avatar}></S.Avatar>
                <S.UserInfo>
                    <div>Профиль</div>
                    <div>Пользователь ФИО</div>
                    <div>Описание может и нет</div>
                </S.UserInfo>
            </S.WrapperUser>
            <S.Title>Оцени идеи для подарка, стань экспертом!</S.Title>
            <ButtonStart setScreen={setScreen} />
        </S.Container>
    );
});

export default Profile;
