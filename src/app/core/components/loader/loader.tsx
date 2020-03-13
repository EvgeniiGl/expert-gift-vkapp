import React from 'react';
import * as S from './loader-style';
import {LoaderProps} from "./loader.props";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import {useStore} from "app/context/store";
import {LoaderStoreType} from "app/stores/LoaderStore";
import {observer} from "mobx-react-lite";
import {RootStoreType} from "app/stores";


export const Loader: React.FunctionComponent<LoaderProps> = observer((props) => {

    const store:RootStoreType = useStore();
    const loaderStore: LoaderStoreType = store.loaderStore;

    return (
        <S.Container show={loaderStore.showLoader} inside={props.inside}>
            <ScreenSpinner size={'medium'}/>
        </S.Container>
    );
});
