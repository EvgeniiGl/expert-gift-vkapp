import React from 'react';
import * as S from "app/containers/ListGift/style";
import like_white from "@img/like_white.svg";
import dislike_white from "@img/dislike_white.svg";
import cross from "@img/cross.svg";
import {GiftType} from "app/stores/GiftStore";
import {observer} from "mobx-react-lite";

interface Props {
    gift: GiftType
    up: (gift: GiftType) => void;
    down: (gift: GiftType) => void;
    repost: (gift: GiftType) => void;

}

export const GiftItem: React.FC<Props> = observer((props) => {

    const repost = () => {
        props.repost(props.gift);
    };
    const up = () => {
        props.up(props.gift);
    };
    const down = () => {
        props.down(props.gift);
    };

    return <S.Wrapper key={props.gift.id}>
        <h2>{props.gift.title}</h2>
        <S.ImgGift src={props.gift.img}/>
        <S.WrapperScore>
            <S.CircleLike onClick={up}>
                <S.Like src={like_white}/>
            </S.CircleLike>
            <S.CircleRepost onClick={repost}>
                <S.Repost src={cross}/>
            </S.CircleRepost>
            <S.CircleDislike onClick={down}>
                <S.Like src={dislike_white}/>
            </S.CircleDislike>
        </S.WrapperScore>
        <S.Hidden/>
    </S.Wrapper>;
});

