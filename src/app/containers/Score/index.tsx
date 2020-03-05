import * as React from "react";
import {ScreenEnum} from "app/stores/ScreenStore";
import {useStore} from "app/context/store";
import {observer} from "mobx-react-lite";
import * as S from "./style";
import Header from "app/core/components/Header";
import star from "@img/star.svg";
import {ButtonStart} from "app/core/components/button_start";
import {UserModel} from "app/stores/UserStore";


const Score = observer(function () {

    const {screenStore: {setScreen}, userStore} = useStore();
    const user: UserModel = userStore;


    return <S.Container>
        <Header score={user.score} screen={ScreenEnum.Score} setScreen={setScreen}/>
        <S.WrapperUser>
            <S.Img src={star}/>
            <S.UserInfo>
                <div>Баллы</div>
                <div>{`У вас ${user.score} баллов`}</div>
                <div>До следующего уровня 2000 баллов<br/>Описание как заработать баллы</div>
            </S.UserInfo>
        </S.WrapperUser>
        <S.Title>Оцени идеи для подарка, стань экспертом!</S.Title>
        <ButtonStart setScreen={setScreen}/>
    </S.Container>;
});

export default Score;
