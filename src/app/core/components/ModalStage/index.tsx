import React from "react";
import * as S from './style';
import {useStore} from "app/context/store";
import {RootStoreType} from "app/stores";
import {observer} from "mobx-react-lite";
import {StageStoreType} from "app/stores/StageStore";


export const ModalStage: React.FC = observer((props) => {

    let wrap: any;

    const store: RootStoreType = useStore();

    const stageStore: StageStoreType = store.stageStore;

    const outSideClick = (e: any) => {
        if (!wrap.contains(e.target)) {
            stageStore.toggleModalStage(false);
        }
    };

    if (!stageStore.showModalStage) return null;

    return <S.Container onClick={outSideClick}>
        <S.Wrapper ref={(ref) => wrap = ref}>
            <S.Bg src={`${stageStore.stageImage}`}/>
            <S.Close onClick={() => stageStore.toggleModalStage(false)}/>
            <S.Title>Поздравляем,</S.Title>
            <S.Text>вы достигли нового ранга</S.Text>
            <S.Button>Круто, рассказать друзьям!</S.Button>
        </S.Wrapper>
    </S.Container>;
});
