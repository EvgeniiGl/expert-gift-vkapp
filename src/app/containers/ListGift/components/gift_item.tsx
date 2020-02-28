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

    return <S.Wrapper key={gift.id}>
        <h2>{gift.title}</h2>
        <S.ImgGift src={gift.img}/>
        <S.WrapperScore>
            <S.CircleLike onClick={() => up(gift)} active={!!gift.mark}>
                <S.Like src={gift.mark ? like_white : like}/>
            </S.CircleLike>
            <S.CircleDislike onClick={() => down(gift)} active={gift.mark === 0}>
                <S.Like src={gift.mark === 0 ? dislike_white : dislike}/>
            </S.CircleDislike>
        </S.WrapperScore>
    </S.Wrapper>;
});

