import React, {useEffect} from 'react';
import MainPage from "app/containers/MainPage";
import Stage from "app/containers/Stage";
import connect from '@vkontakte/vk-connect';
import {useStore} from "app/context/store";
import {GlobalStyle} from "./global_styles";
import ListGift from "app/containers/ListGift";
import Status from "app/containers/Status";
import Profile from "app/containers/Profile";
import {ScreenEnum} from "app/stores/ScreenStore";
import {observer} from "mobx-react-lite";
import {customAlert} from "app/core/components/alert";
import {GiftType} from "app/stores/GiftStore";
import Alert from "app/core/components/alert/components";
import {vk_bridge} from "app/core/services/vk_bridge";
import {isProduction, vk_developer_id} from "../config";
import {API} from "app/core/services/api";
import {Loader} from "app/core/components/loader/loader";
import {ModalStage} from "app/core/components/ModalStage";
import {StageModel} from "app/stores/StageStore";

export const App =
    observer(() => {
        const store = useStore();
        const {screenStore, userStore, giftStore, stageStore} = store;

        useEffect(() => {
            connect.subscribe(({detail: {type, data}}) => {
                    if (type === 'VKWebAppUpdateConfig') {
                        // const schemeAttribute = document.createAttribute('scheme');
                    }
                }
            );
            //TODO rewrite to async Promises
            fetchDataUser();
            fetchNewGifts();
            getListStages()
            vk_bridge.send("VKWebAppInit", {});
        }, []);

        const fetchDataUser = async () => {
            let user;
            try {
                if (isProduction) {
                    const dataUser = await vk_bridge.send('VKWebAppGetUserInfo');
                    if (dataUser.status) user = dataUser.data;
                } else {
                    user = {id: vk_developer_id};
                }
                localStorage.setItem('user_id', user.id);
            } catch (e) {
                customAlert.danger('Не удалось получить пользователя Вконтакте!');
            }
            if (user.id) {
                store.setUser(user);
            } else {
                customAlert.danger('Не удалось получить пользователя!');
            }

            const response = await API.get('user');

            if (response.status) {
                userStore.setStage(response.data.stage);
                userStore.setScore(response.data.score);
            } else {
                customAlert.danger('Не удалось получить счет и рейтинг!');
            }
        };

        const fetchNewGifts = async () => {
            const response = await API.get<{ data: GiftType[] }>('gifts_new');
            if (response.status && response.data.length > 0) {
                giftStore.setGifts(response.data);
            } else {
                customAlert.danger('Не удалось получить список подарков!');
            }
        };

        const getListStages = async () => {
            const response = await API.get<StageModel[]>('/list_stages');
            if (response.status) {
                stageStore.setListStages(response.data);
                stageStore.setNextStage(response.data);

            } else {
                customAlert.danger('Не удалось получить список рейтинга!');
            }
        };

        return (
            <React.Fragment>
                <GlobalStyle/>
                {screenStore.currentScreen === ScreenEnum.MainPage && <MainPage/>}
                {screenStore.currentScreen === ScreenEnum.Profile && <Profile/>}
                {screenStore.currentScreen === ScreenEnum.Stage && <Stage/>}
                {screenStore.currentScreen === ScreenEnum.Status && <Status/>}
                {screenStore.currentScreen === ScreenEnum.ListGift && <ListGift/>}
                <Alert/>
                <Loader control />
                <ModalStage />
            </React.Fragment>
        );
    });
