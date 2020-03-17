import React, {useEffect} from 'react';
import MainPage from "app/containers/MainPage";
import Stage from "app/containers/Stage";
import connect from '@vkontakte/vk-connect';
import {useStore} from "app/context/store";
import {GlobalStyle} from "./global_styles";
import ListGift from "app/containers/ListGift";
import Profile from "app/containers/Profile";
import {ScreenEnum} from "app/stores/ScreenStore";
import {observer} from "mobx-react-lite";
import {customAlert} from "app/core/components/alert";
import {GiftType} from "app/stores/GiftStore";
import Alert from "app/core/components/alert/components";
import {vk_bridge} from "app/core/services/vk_bridge";
import {API} from "app/core/services/api";
import {Loader} from "app/core/components/loader/loader";
import {ModalStage} from "app/core/components/ModalStage";
import {StageModel} from "app/stores/StageStore";
import {IUser} from "app/stores/UsersStore";

type IInitialData = [Promise<{ data?: User }>, Promise<{ data?: GiftType[] }>, Promise<{ data?: StageModel[] }>]

interface User extends IUser {
    stage: StageModel
}

export const App =
    observer(() => {
        const store = useStore();
        const {screenStore, usersStore, giftStore, stageStore, loaderStore} = store;

        useEffect(() => {
            vk_bridge.send("VKWebAppInit", {});
            connect.subscribe(({detail: {type, data}}) => {
                    if (type === 'VKWebAppUpdateConfig') {
                        // const schemeAttribute = document.createAttribute('scheme');
                    }
                }
            );
            (async () => {
                await fetchUserVk();
                getInitailData();
            })();
        }, []);

        const fetchUserVk = async () => {
            let user: IUser = usersStore.user;
            try {
                const dataUser = await vk_bridge.send('VKWebAppGetUserInfo');
                if (dataUser.status) user = dataUser.data;
                store.usersStore.setUser(user);
                localStorage.setItem('user_id', `${user.id}`);
            } catch (e) {
                customAlert.danger('Не удалось получить пользователя Вконтакте!');
            }
        };

        const getInitailData = async () => {
            loaderStore.toggleLoader(true);
            let promises: IInitialData = [
                API.get<User>('user'),
                API.get<GiftType[]>('gifts_new'),
                API.get<StageModel[]>('/list_stages')
            ];
            const data = await Promise.all(promises);
            await setListStages(data[2].data);
            setUserData(data[0].data);
            setNewGifts(data[1].data);
            loaderStore.toggleLoader(false);
        };

        const setListStages = (stages?: StageModel[]) => {
            if (stages && stages.length > 0) {
                stageStore.setListStages(stages);
            } else {
                customAlert.danger('Не удалось получить список рейтинга!');
            }
        };

        const setUserData = (user?: User) => {
            if (user && user.id) {
                store.usersStore.setUser({...store.usersStore.user, ...user});
                stageStore.setStage(user.stage);
            } else {
                customAlert.danger('Не удалось получить данные пользователя!');
            }
        };

        const setNewGifts = (gifts?: GiftType[]) => {
            if (gifts && gifts.length > 0) {
                giftStore.setGifts(gifts);
            } else {
                customAlert.danger('Не удалось получить список подарков!');
            }
        };

        return (
            <React.Fragment>
                <GlobalStyle/>
                {screenStore.currentScreen === ScreenEnum.MainPage && <MainPage/>}
                {screenStore.currentScreen === ScreenEnum.Profile && <Profile/>}
                {screenStore.currentScreen === ScreenEnum.Stage && <Stage/>}
                {screenStore.currentScreen === ScreenEnum.ListGift && <ListGift/>}
                <Alert/>
                <Loader control/>
                <ModalStage/>
            </React.Fragment>
        );
    });
