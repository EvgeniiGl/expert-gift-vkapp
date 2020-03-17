import React from 'react';
import {useStore} from '../../context/store';
import {observer} from 'mobx-react-lite';
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style';
import avatar from '@img/avatar.svg';
import Header from "app/core/components/Header";
import {IUser} from "app/stores/UsersStore";
import {ListStages} from "app/containers/Profile/components/list_stages";
import {SliderRating} from "app/containers/Profile/components/slider_rating";
import {StageStoreType} from "app/stores/StageStore";


const Profile = observer(function (props) {
    const screenStore = useStore().screenStore;
    const user: IUser = useStore().usersStore.user;
    const stageStore: StageStoreType = useStore().stageStore;

    return (
        <S.Container>
            <Header screen={ScreenEnum.Profile} setScreen={screenStore.setScreen}/>
            <S.Wrapper>
                <S.WrapperUser>
                    <S.UserInfo>
                        <S.Avatar src={user.photo_200 || avatar}/>
                        <div>
                            <S.Text>Ваш статус -</S.Text>
                            <S.Status>{stageStore.stage.name} <S.Arrow>&#9658;</S.Arrow></S.Status>

                        </div>
                    </S.UserInfo>
                    <SliderRating list_stages={[...stageStore.listStages]} score={stageStore.stage.score}/>
                </S.WrapperUser>
                <S.Main>
                    <S.Title>Система уровней</S.Title>
                    <ListStages list_stages={stageStore.listStages}/>
                    {/*<S.Text top={10} bottom={10}>Подробное описание как заработать больше баллов</S.Text>*/}
                </S.Main>
            </S.Wrapper>
        </S.Container>
    );
});

export default Profile;
