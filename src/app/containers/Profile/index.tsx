import React, {useEffect, useState} from 'react';
import {useStore} from '../../context/store';
import {observer} from 'mobx-react-lite';
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style';
import avatar from '@img/avatar.svg';
import Header from "app/core/components/Header";
import {StageModel, UserModel} from "app/stores/UserStore";
import {ListStages} from "app/containers/Profile/components/list_stages";
import {API} from "app/core/services/api";
import {customAlert} from "app/core/components/alert";
import {SliderRating} from "app/containers/Profile/components/slider_rating";
import {LoaderSwitch} from "app/core/components/loader/loader-switch";


const Profile = observer(function (props) {
    const {screenStore: {setScreen}, userStore} = useStore();
    const user: UserModel = userStore;

    const [listStages, setListStages] = useState([]);

    const getListStages = async () => {
        LoaderSwitch.start();
        const response = await API.get<StageModel[]>('/list_stages');
        if (response.status) {
            setListStages(response.data);
        } else {
            customAlert.danger('Не удалось получить список рейтинга!');
        }
        LoaderSwitch.stop();
    };

    useEffect(() => {
        getListStages();
    }, []);

    return (
        <S.Container>
            <Header screen={ScreenEnum.Profile} setScreen={setScreen}/>
            <S.Wrapper>
                <S.WrapperUser>
                    <S.UserInfo>
                        <S.Avatar src={user.photo_200 || avatar}/>
                        <div>
                            <S.Text>Ваш статус -</S.Text>
                            <S.Status>{user.stage.name}</S.Status>
                        </div>
                    </S.UserInfo>
                    <SliderRating list_stages={listStages} score={user.score}/>
                </S.WrapperUser>
                <S.Main>
                    <S.Title>Система уровней</S.Title>
                    <ListStages list_stages={listStages}/>
                    {/*<S.Text top={10} bottom={10}>Подробное описание как заработать больше баллов</S.Text>*/}
                </S.Main>
            </S.Wrapper>
        </S.Container>
    );
});

export default Profile;
