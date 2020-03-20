import React from 'react';
import * as S from "app/containers/ListGift/style";
import like_white from "@img/like_white.svg";
import cross from "@img/cross.svg";
import dislike_white from "@img/dislike_white.svg";

interface Props {
    setMark: (mark: 0 | 1) => void
    repost: () => void
}

export const GiftMenu: React.FC<Props> = (props) => {

    const repost = () => {
        props.repost();
    };
    const up = () => {
        props.setMark(1);
    };
    const down = () => {
        props.setMark(0);
    };

    return <S.WrapperScore>
        <S.Score>
            <S.CircleLike onClick={up}>
                <S.Like src={like_white}/>
            </S.CircleLike>
            <S.Label>Нравится</S.Label>
        </S.Score>
        <S.Score>
            <S.CircleRepost onClick={repost}>
                <S.Repost src={cross}/>
            </S.CircleRepost>
            <S.Label>Хочу себе</S.Label>
        </S.Score>
        <S.Score>
            <S.CircleDislike onClick={down}>
                <S.Like src={dislike_white}/>
            </S.CircleDislike>
            <S.Label>Не нравится</S.Label>
        </S.Score>
    </S.WrapperScore>;
};

