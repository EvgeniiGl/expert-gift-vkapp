import React from 'react';
import * as S from './style';
import crown from '@img/crown.svg';
import gifts_list from '@img/gifts_list.svg';
import avatar from '@img/avatar.svg';
import {ScreenEnum} from "app/stores/ScreenStore";
import {observer} from "mobx-react-lite";
import {useStore} from "app/context/store";
import {UserModel} from "app/stores/UserStore";

interface Props {
    screen: ScreenEnum
    setScreen: (ScreenEnum) => void
}

const Header: React.FC<Props> = observer((props) => {


        const user: UserModel = useStore().userStore;

        return <S.Container>
            <S.Info>
                <S.Stage>{user.stage.name}</S.Stage>
                <S.Score>{user.score}</S.Score>
            </S.Info>
            <S.Tab active={props.screen === ScreenEnum.ListGift} onClick={() => props.setScreen(ScreenEnum.ListGift)}>
                <S.ImgGiftsList src={gifts_list}/>
            </S.Tab>
            <S.Tab active={props.screen === ScreenEnum.Status} onClick={() => props.setScreen(ScreenEnum.Status)}>
                <S.Img src={crown}/>
            </S.Tab>
            <S.Tab active={props.screen === ScreenEnum.Profile} onClick={() => props.setScreen(ScreenEnum.Profile)}>
                <S.Avatar src={avatar}/>
            </S.Tab>
        </S.Container>;
    }
);


export default Header;
