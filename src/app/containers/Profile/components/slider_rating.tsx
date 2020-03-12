import React from 'react';
import * as S from '../style';
import {StageModel} from "app/stores/UserStore";

type Props = {
    list_stages: StageModel[]
    score: number
}

export const SliderRating: React.FC<Props> = (props) => {

    let start, end;
    for (let i = 0; props.list_stages.length > i; i++) {
        if (props.score <= props.list_stages[i].score) {
            end = props.list_stages[i].score;
            break;
        }
        start = props.list_stages[i].score;
    }

    const width = (props.score) / (end - start) || 1;


    return <S.WrapSlider>
        <S.SliderText>У вас {props.score} баллов</S.SliderText>
        <S.ScoreSlider width={Math.ceil(width / 2.5)}/>
        <S.Strip/>
        <S.Score width={width}>
            <span>{start}</span>
            <span>{props.score}</span>
            <span>{end}</span>
        </S.Score>
    </S.WrapSlider>;
};
