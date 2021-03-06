import React from 'react';
import * as S from './style';
import crown from '@img/crown.svg';
import gifts_list from '@img/gifts_list.svg';
import avatar from '@img/avatar.svg';
import {ScreenEnum} from "app/stores/ScreenStore";
import {observer} from "mobx-react-lite";
import {useStore} from "app/context/store";
import {StageStoreType} from "app/stores/StageStore";

interface Props {
    screen: ScreenEnum
    setScreen: (screen: ScreenEnum) => void
}

const Header: React.FC<Props> = observer((props) => {


        const stageStore: StageStoreType = useStore().stageStore;

        return <S.Container>
            <S.Info>
                <S.Stage>{stageStore.stage.name}</S.Stage>
                <S.Score>{stageStore.stage.score}</S.Score>
            </S.Info>
            <S.Tab active={props.screen === ScreenEnum.ListGift} onClick={() => props.setScreen(ScreenEnum.ListGift)}>
                <S.ImgGiftsList src={gifts_list}/>
            </S.Tab>
            <S.Tab active={props.screen === ScreenEnum.Stage} onClick={() => props.setScreen(ScreenEnum.Stage)}>
                <S.Img src={crown}/>
            </S.Tab>
            <S.Tab active={props.screen === ScreenEnum.Profile} onClick={() => props.setScreen(ScreenEnum.Profile)}>
                <S.Avatar src={avatar}/>
            </S.Tab>
        </S.Container>;
    }
);


export default Header;
