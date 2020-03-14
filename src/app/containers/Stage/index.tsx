import * as React from "react";
import {ScreenEnum} from "app/stores/ScreenStore";
import {useStore} from "app/context/store";
import {observer} from "mobx-react-lite";
import * as S from "./style";
import Header from "app/core/components/Header";
import star from "@img/star.svg";
import {ButtonStart} from "app/core/components/button_start";
import {StageStoreType} from "app/stores/StageStore";


const Stage = observer(function () {

    const {screenStore: {setScreen}} = useStore();
    const stageStore: StageStoreType = useStore().stageStore;

    return <S.Container>
        <Header screen={ScreenEnum.Stage} setScreen={setScreen}/>
        <S.WrapperUser>
            <S.Img src={star}/>
            <S.UserInfo>
                <div>Баллы</div>
                <div>{`У вас ${stageStore.stage.score} баллов`}</div>
                <div>До следующего уровня 2000 баллов<br/>Описание как заработать баллы</div>
            </S.UserInfo>
        </S.WrapperUser>
        <S.Title>Оцени идеи для подарка, стань экспертом!</S.Title>
        <ButtonStart/>
    </S.Container>;
});

export default Stage;
