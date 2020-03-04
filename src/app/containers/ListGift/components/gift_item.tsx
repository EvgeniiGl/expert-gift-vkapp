import React from 'react';
import * as S from "app/containers/ListGift/style";
import like_white from "@img/like_white.svg";
import dislike_white from "@img/dislike_white.svg";
import cross from "@img/cross.svg";
import {IGift} from "app/stores/GiftStore";
import {observer} from "mobx-react-lite";

interface Props {
    gift: IGift
    up: (gift: IGift) => void;
    down: (gift: IGift) => void;

}

export const GiftItem: React.FC<Props> = observer(({gift, up, down}) => {

    const repost = () => {

    };

    return <S.Wrapper key={gift.id}>
        <h2>{gift.title}</h2>
        <S.ImgGift src={gift.img}/>
        <S.WrapperScore>
            <S.CircleLike onClick={() => up(gift)}>
                <S.Like src={like_white}/>
            </S.CircleLike>
            <S.CircleRepost onClick={repost}>
                <S.Repost src={cross}/>
            </S.CircleRepost>
            <S.CircleDislike onClick={() => down(gift)}>
                <S.Like src={dislike_white}/>
            </S.CircleDislike>
        </S.WrapperScore>
        <S.Hidden />
    </S.Wrapper>;
});

