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
import {IGift} from "app/stores/GiftStore";
import Alert from "app/core/services/alert/components";

export const App =
    observer(() => {
        const store = useStore();
        const {screenStore, userStore, giftStore} = store;
        //get user info
        useEffect(() => {

            console.log('useEffect App',);
            connect.subscribe(({detail: {type, data}}) => {
                    if (type === 'VKWebAppUpdateConfig') {
                        const schemeAttribute = document.createAttribute('scheme');
                        console.log('schemeAttribute-- ', schemeAttribute);
                    }
                }
            );
            fetchDataUser();
            fetchGifts();
        }, []);

        const fetchDataUser = async () => {
            let user;
            try {
                user =
                    {id: 151079225};
                // await connect.sendPromise('VKWebAppGetUserInfo');
                localStorage.setItem('user_id', user.id);
            } catch (e) {
                console.log('err-- ', e);
            }
            if (user.id) {
                store.setUser(user);
            } else {
                customAlert.danger('Не удалось получить пользователя!');
            }
            console.log('user vk-- ', user);
            const response = await HTTP.get<{ id: number, score: number, stage: string }>('user');
            console.log('user -- ', response.data);
            if (response.data && response.data.id) {
                userStore.setStage(response.data);
                userStore.setStage(response.data.stage);
                userStore.setScore(response.data.score);
            } else {
                customAlert.danger('Не удалось получить счет!');
            }
        };

        const fetchGifts = async () => {
            const response = await HTTP.get<IGift[]>('gifts');
            console.log('log-- ', response.data);
            if (response.data && response.data.length > 0) {
                giftStore.getGifts(response.data);
            } else {
                customAlert.danger('Не удалось получить список подарков!');
            }
        };

        console.log('store.screenStore.currentScreen-- ', screenStore.currentScreen);
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
