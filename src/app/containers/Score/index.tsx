import * as React from "react";
import {ScreenEnum} from "app/stores/ScreenStore";
import {useStore} from "app/context/store";
import {observer} from "mobx-react-lite";
import * as S from "./style";
import Header from "app/components/Header";
import star from "@img/star.svg";
import {ButtonStart} from "app/core/components/button_start";


const Score = observer(function () {

    const {screenStore: {setScreen}} = useStore();

    console.log('Score-- ',);
    return <S.Container>
        <Header screen={ScreenEnum.Score} setScreen={setScreen}/>
        <S.WrapperUser>
            <S.Img src={star}></S.Img>
            <S.UserInfo>
                <div>Баллы</div>
                <div>У вас 1356 баллов</div>
                <div>До следующего уровня 2000 баллов<br/>Описание как заработать баллы</div>
            </S.UserInfo>
        </S.WrapperUser>
        <S.Title>Оцени идеи для подарка, стань экспертом!</S.Title>
        <ButtonStart setScreen={setScreen}/>
    </S.Container>;
});

export default Score;