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
import {HTTP} from "app/services/http";
import {customAlert} from "app/services/alert";

export const App =
    observer(() => {
        const {screenStore, userStore, giftStore} = useStore();
        //get user info
        useEffect(() => {

            giftStore.getGifts();

            console.log('useEffect App',);
            connect.subscribe(({detail: {type, data}}) => {
                    if (type === 'VKWebAppUpdateConfig') {
                        const schemeAttribute = document.createAttribute('scheme');
                        console.log('schemeAttribute-- ', schemeAttribute);
                    }
                }
            );

            async function fetchDataUser() {
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
                // const user = {
                //     id: 151079225,
                //     first_name: "Евгений",
                //     last_name: "Глечиков",
                //     sex: 2,
                //     city: {id: 97, title: "Новокузнецк"},
                //     country: {id: 1, title: "Россия"},
                //     photo_100: "https://sun9-46.userapi.com/c639127/v639127225/8ed0/IWvzk8fFTBI.jpg?ava=1",
                //     photo_max_orig: "https://sun9-24.userapi.com/c639127/v639127225/8ecc/dFKoQdeRsWU.jpg?ava=1",
                //     bdate: "17.12.1983",
                //     photo_200: "https://sun9-70.userapi.com/c639127/v639127225/8ecf/ecFoax3YGYk.jpg?ava=1",
                //     timezone: 7
                // };


                userStore.setUser(user);

                // dispatch({
                //     type: 'setUser',
                //     payload: {
                //         fetchedUser: user,
                //         popout: false,
                //     }
                // })
            }

            fetchDataUser();
        }, []);


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