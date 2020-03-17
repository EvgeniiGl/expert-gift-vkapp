import React from 'react';
import * as S from '../style';
import {StageModel} from "app/stores/StageStore";

type Props = {
    list_stages: StageModel[]
    score: number
}

export const SliderRating: React.FC<Props> = (props) => {

    let start = 0;
    let end = 100;
    for (let i = 0; props.list_stages.length > i; i++) {
        if (props.score <= props.list_stages[i].score) {
            end = props.list_stages[i].score;
            break;
        }
        start = props.list_stages[i].score;
    }

    const width = (props.score - start) / (end - start) * 100 || 2;

    return <S.Slider>
        <S.SliderText>У вас {props.score} баллов</S.SliderText>
        <S.WrapSlider>
            <S.ScoreSlider width={Math.ceil(width / 1.25)}/>
            <S.Strip/>
            <S.Score width={width}>
                <span>{start}</span>
                <span>{props.score}</span>
                <span>{end}</span>
            </S.Score>
        </S.WrapSlider>
    </S.Slider>;
};
