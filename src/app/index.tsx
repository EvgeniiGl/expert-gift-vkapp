import React, {useEffect} from 'react';
import MainPage from "app/containers/MainPage";
import Score from "app/containers/Score";
import connect from '@vkontakte/vk-connect';
import {useStore} from "app/context/store";
import {GlobalStyle} from "./global_styles";
import ListGift from "app/containers/ListGift";
import Status from "app/containers/Status";
import Profile from "app/containers/Profile";
import {ScreenEnum} from "app/stores/ScreenStore";
import {observer} from "mobx-react-lite";
import {HTTP} from "app/core/services/http";
import {customAlert} from "app/core/services/alert";
import {GiftType} from "app/stores/GiftStore";
import Alert from "app/core/services/alert/components";
import {vk_bridge} from "app/core/services/vk_bridge";

export const App =
    observer(() => {
        const store = useStore();
        const {screenStore, userStore, giftStore} = store;
        //get user info
        useEffect(() => {
            connect.subscribe(({detail: {type, data}}) => {
                    if (type === 'VKWebAppUpdateConfig') {
                        // const schemeAttribute = document.createAttribute('scheme');
                    }
                }
            );
            fetchDataUser();
            fetchNewGifts();
            vk_bridge.send("VKWebAppInit");
        }, []);

        const fetchDataUser = async () => {
            let user;
            try {
                user =
                    {id: 151079225};
                // await connect.sendPromise('VKWebAppGetUserInfo');
                localStorage.setItem('user_id', user.id);
            } catch (e) {

            }
            if (user.id) {
                store.setUser(user);
            } else {
                customAlert.danger('Не удалось получить пользователя!');
            }

            const response = await HTTP.get<{ id: number, score: number, stage: string }>('user');

            if (response.data && response.data.id) {
                userStore.setStage(response.data.stage);
                userStore.setScore(response.data.score);
            } else {
                customAlert.danger('Не удалось получить счет!');
            }
        };

        const fetchNewGifts = async () => {
            const response = await HTTP.get<GiftType[]>('gifts_new');
            if (response.data && response.data.length > 0) {
                giftStore.getGifts(response.data);
            } else {
                customAlert.danger('Не удалось получить список подарков!');
            }
        };


        return (
            <React.Fragment>
                <GlobalStyle/>
                {screenStore.currentScreen === ScreenEnum.MainPage && <MainPage/>}
                {screenStore.currentScreen === ScreenEnum.Profile && <Profile/>}
                {screenStore.currentScreen === ScreenEnum.Score && <Score/>}
                {screenStore.currentScreen === ScreenEnum.Status && <Status/>}
                {screenStore.currentScreen === ScreenEnum.ListGift && <ListGift/>}
                <Alert/>
            </React.Fragment>
        );
    });
