import React from 'react';
import * as S from './style';
import crown from '@img/crown.svg';
import star from '@img/star.svg';
import avatar from '@img/avatar.svg';
import {ScreenEnum} from "app/stores/ScreenStore";

interface Props {
    screen: ScreenEnum
    setScreen: (ScreenEnum) => void
}

const Header: React.FC<Props> = (props) => {


    return <S.Container>
        <S.Tab active={props.screen === ScreenEnum.Profile} onClick={() => props.setScreen(ScreenEnum.Profile)}>
            <S.Avatar src={avatar}/>
        </S.Tab>
        <S.Tab active={props.screen === ScreenEnum.Score} onClick={() => props.setScreen(ScreenEnum.Score)}>
            <S.Img src={star}/>
            <S.Score>1345</S.Score>
        </S.Tab>
        <S.Tab active={props.screen === ScreenEnum.Status} onClick={() => props.setScreen(ScreenEnum.Status)}>
            <S.Img src={crown}/>
        </S.Tab>
    </S.Container>;
};


export default Header;
