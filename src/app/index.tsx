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

export const App =
    observer(() => {
        const {screenStore, userStore, giftStore} = useStore();
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
            console.log('fetchUser-- ',);
            let user;
            try {
                user = {id: 151079225};
                // await connect.sendPromise('VKWebAppGetUserInfo');
            } catch (e) {
                console.log('err-- ', e);
            }
            if (!user.id) {
                customAlert.danger('Не удалось получить пользователя!');
            }
            console.log('user-- ', user);
            const response = await HTTP.post<{ id: number, score: number, stage: string }>('user', {id: user.id});
            console.log('response-- ', response.data);
            if (response.data && response.data.id) {
                user = {...user, ...response.data};
            } else {
                customAlert.danger('Не удалось получить счет!');
            }
            userStore.setUser(user);
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
            </React.Fragment>
        );
    });