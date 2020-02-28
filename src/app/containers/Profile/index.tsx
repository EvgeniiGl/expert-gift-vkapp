import React from 'react';
import {useStore} from '../../context/store';
import {observer} from 'mobx-react-lite';
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style';
import avatar from '@img/avatar.svg';
import Header from "app/core/components/Header";
import {ButtonStart} from "app/core/components/button_start";
import {UserModel} from "app/stores/UserStore";

const Profile = observer(function (props) {
    const {screenStore: {setScreen}, userStore} = useStore();
    const user: UserModel = userStore;

    return (
        <S.Container>
            <Header screen={ScreenEnum.Profile} setScreen={setScreen}/>
            <S.WrapperUser>
                <S.Avatar src={user.photo_200 || avatar}></S.Avatar>
                <S.UserInfo>
                    <div>Профиль</div>
                    <div>{user.first_name || ''} {user.last_name || ''}</div>
                    {/*<div>Описание может и нет</div>*/}
                </S.UserInfo>
            </S.WrapperUser>
            <S.Title>Оцени идеи для подарка, стань экспертом!</S.Title>
            <ButtonStart setScreen={setScreen}/>
        </S.Container>
    );
});

export default Profile;
