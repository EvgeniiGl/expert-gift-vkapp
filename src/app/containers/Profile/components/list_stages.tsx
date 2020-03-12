import React from 'react';
import * as S from './../style';
import {StageModel} from 'app/stores/UserStore';

interface Props {
    list_stages: StageModel[]
}

export const ListStages: React.FC<Props> = (props) => {

    const list = props.list_stages.reduce((acc, currentStage) => {
        acc.col1.push(<S.Text bold key={currentStage.id}>{currentStage.name}</S.Text>);
        acc.col2.push(<S.Text bold
                              key={currentStage.id}>
            <span>{acc.score}</span> - <span>{currentStage.score}</span>
        </S.Text>);
        acc.score = currentStage.score
        return acc;
    }, {col1: [], col2: [], score:0});

    return <S.Wrap>
        <S.Col>
            <S.Text bottom={10}>Уровни</S.Text>
            {list.col1}
        </S.Col>
        <S.Col>
            <S.Text bottom={10}>Баллы</S.Text>
            {list.col2}
        </S.Col>
    </S.Wrap>;
};

