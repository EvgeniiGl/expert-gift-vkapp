import React from "react";
import * as S from './style';
import stageExpert from '@img/stage_expert.png';
import stage1 from '@img/stage1.png';
import stage2 from '@img/stage2.png';

export enum StageEnum {
    'one' = stage1, 'two' = stage2, 'expert' = stageExpert
}

interface Props {
    stage: StageEnum,
    toggleModalStage: (show: boolean) => void
}

export const ModalStage: React.FC<Props> = (props) => {

    let wrap;

    const outSideClick = (e) => {
        if (!wrap.contains(e.target)) {
            props.toggleModalStage(false)
        }
    };

    return <S.Container onClick={outSideClick}>
        <S.Wrapper ref={(ref) => wrap = ref}>
            <S.Bg src={props.stage}/>
            <S.Close onClick={() => props.toggleModalStage(false)}/>
            <S.Title>Поздравляем,</S.Title>
            <S.Text>вы достигли нового ранга</S.Text>
            <S.Button>Круто, рассказать друзьям!</S.Button>
        </S.Wrapper>
    </S.Container>;
};