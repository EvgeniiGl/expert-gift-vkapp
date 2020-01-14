import React, {useEffect} from 'react';
import MainPage from "app/containers/MainPage";
import Score from "app/containers/Score";
import {hot} from "react-hot-loader/root";
import TodoExample from "app/components/TodoExample";
import connect from '@vkontakte/vk-connect';

export const App = hot(() => {

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
            <MainPage/>
            {/*/!**/}
            {/*    //@ts-ignore*!/*/}
            {/*<Profile/>*/}
            <Score/>
            {/*/!**/}
            {/*    //@ts-ignore*!/*/}
            {/*<Status/>*/}
            {/*/!**/}
            {/*    //@ts-ignore*!/*/}
            {/*<ListGift/>*/}
            <TodoExample/>
        </React.Fragment>
    );
});