import React, {useEffect, useState} from 'react';
import * as S from './loader-style';
import {Subject, Subscription} from 'rxjs';
import {LoaderProps} from "./loader.props";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";

export const loader$ = new Subject();

export const Loader: React.FunctionComponent<LoaderProps> = (props) => {
    let loaderStream: Subscription;

    const [show, setLoader] = useState(false);

    if (props.control) {
        setLoader(props.show);
    } else {
        loaderStream = loader$.subscribe((v: boolean) => {
            setLoader(v);
        });
    }

    useEffect(() => {
        return () => {
            loaderStream.unsubscribe();
        };
    }, []);

    return (
        <S.Container show={show} inside={props.inside}>
            <ScreenSpinner size={'medium'}/>
        </S.Container>
    );
};
