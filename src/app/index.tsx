import React, {useEffect} from 'react';
import MainPage from "app/containers/MainPage";
import Score from "app/containers/Score";
import {hot} from "react-hot-loader/root";
import connect from '@vkontakte/vk-connect';
import {useStore} from "app/context/store";
import {GlobalStyle} from "./global_styles";
import ListGift from "app/containers/ListGift";
import Profile from "app/containers/Profile";
import Status from "app/containers/Status";

export const App = hot(() => {
    const store = useStore();
    //get user info
    useEffect(() => {
        // dispatch({
        //     type: 'setPopout',
        //     payload: {
        //         popout: true,
        //     }
        // })
        console.log('useEffect-- ',);
        connect.subscribe(({detail: {type, data}}) => {
                if (type === 'VKWebAppUpdateConfig') {
                    const schemeAttribute = document.createAttribute('scheme');
                    console.log('schemeAttribute-- ', schemeAttribute);
                }
            }
        );

        async function fetchUser() {
            console.log('fetchUser-- ',);
            const user = await connect.sendPromise('VKWebAppGetUserInfo');
            console.log('user-- ', user);
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


            store.userStore.setUser(user);

            // dispatch({
            //     type: 'setUser',
            //     payload: {
            //         fetchedUser: user,
            //         popout: false,
            //     }
            // })
        }

        fetchUser();
    }, []);


    return (
        <React.Fragment>
            <GlobalStyle/>
            <MainPage/>
            <Profile/>
            <Score/>
            <Status/>
            <ListGift/>
            {/*<TodoExample/>*/}
        </React.Fragment>
    );
});