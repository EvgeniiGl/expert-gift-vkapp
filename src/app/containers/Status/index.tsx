import * as React from "react";
import {ScreenEnum} from "app/stores/ScreenStore";
import {useStore} from "app/context/store";
import {observer} from "mobx-react-lite";
import * as S from "./style";
import Header from "app/core/components/Header";
import crown from "@img/crown.svg";
import {ButtonStart} from "app/core/components/button_start";
import {UserModel} from "app/stores/UserStore";


const Status = observer(function () {

    const {screenStore: {setScreen}, userStore} = useStore();
    const user: UserModel = userStore;

    return <S.Container>
        <Header score={user.score} screen={ScreenEnum.Status} setScreen={setScreen}/>
        <S.WrapperUser>
            <S.Img src={crown}></S.Img>
            <S.UserInfo>
                <div>Статус</div>
                <div>Новичок</div>
                <div>Следующий уровень .......</div>
                <div>Описание как подняться до следующего уровня</div>
            </S.UserInfo>
        </S.WrapperUser>
        <S.Title>Оцени идеи для подарка, стань экспертом!</S.Title>
        <ButtonStart setScreen={setScreen}/>
    </S.Container>;
});

export default Status;
