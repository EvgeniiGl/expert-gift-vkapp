import React from 'react';
import {useStore} from 'app/context/store';
import {observer} from 'mobx-react-lite';
import * as S from './style';
import avatar from '@img/avatar.svg';
import {UserModel} from "app/stores/UserStore";
import {ButtonStart} from "app/core/components/button_start";
import {StageStoreType} from "app/stores/StageStore";

const MainPage = observer(function (props) {
    const { userStore} = useStore();
    const stageStore: StageStoreType = useStore().stageStore;

    return (
        <S.Container>
            <S.Title>Оцени идеи для подарка,<br/>стань экспертом!</S.Title>
            <S.WrapperUser>
                <S.Avatar src={userStore.photo_200 || avatar}/>
                <S.UserInfo>
                    <div>Рейтинг: {stageStore.stage.score} баллов</div>
                    <div>Ваш статус: {stageStore.stage.name}</div>
                </S.UserInfo>
            </S.WrapperUser>
           <ButtonStart />
        </S.Container>
    );
});

export default MainPage;
