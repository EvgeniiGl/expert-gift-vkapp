import React from 'react';
import * as S from "app/containers/ListGift/style";
import like_white from "@img/like_white.svg";
import like from "@img/like.svg";
import dislike_white from "@img/dislike_white.svg";
import dislike from "@img/dislike.svg";
import {IGift} from "app/stores/GiftStore";
import {observer} from "mobx-react-lite";

interface Props {
    gift: IGift
    up: (gift: IGift) => void;
    down: (gift: IGift) => void;

}

export const GiftItem: React.FC<Props> = observer(({gift, up, down}) => {
    console.log('log--  gift-item',);
    return <S.Wrapper key={gift.id}>
        <h2>{gift.title}</h2>
        <S.ImgGift src={gift.img}/>
        <S.WrapperScore>
            <S.CircleLike onClick={() => up(gift)} active={!!gift.rate}>
                <S.Like src={gift.rate ? like_white : like}/>
            </S.CircleLike>
            <S.CircleDislike onClick={() => down(gift)} active={gift.rate === false}>
                <S.Like src={gift.rate === false ? dislike_white : dislike}/>
            </S.CircleDislike>
        </S.WrapperScore>
    </S.Wrapper>;
});

