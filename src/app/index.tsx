import * as React from 'react';
// import {hot} from 'react-hot-loader/root';
// import {Root} from 'app/containers/Root';
import {MainPage} from "app/containers/MainPage";
// import {Profile} from "app/containers/Profile";
// import {Score} from "app/containers/Score";
// import {Status} from "app/containers/Status";
// import {ListGift} from "app/containers/ListGift";
import {hot} from "react-hot-loader/root";
// import {Root} from "app/containers/Root";


export const App = hot(() => (
    <React.Fragment>
        {/*
            //@ts-ignore*/}
        <MainPage/>
        {/*/!**/}
        {/*    //@ts-ignore*!/*/}
        {/*<Profile/>*/}
        {/*/!**/}
        {/*    //@ts-ignore*!/*/}
        {/*<Score/>*/}
        {/*/!**/}
        {/*    //@ts-ignore*!/*/}
        {/*<Status/>*/}
        {/*/!**/}
        {/*    //@ts-ignore*!/*/}
        {/*<ListGift/>*/}
    </React.Fragment>
));