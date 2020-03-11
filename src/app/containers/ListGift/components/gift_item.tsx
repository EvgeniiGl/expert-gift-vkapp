import React from 'react';
import * as S from "app/containers/ListGift/style";
import {GiftType} from "app/stores/GiftStore";

interface Props {
    gift: GiftType
}

export const GiftItem: React.FC<Props> = (props) => {
    return <S.Wrapper key={props.gift.id}>
        <S.SliderItem>
            <S.ImgGift src={props.gift.img}/>
        </S.SliderItem>
    </S.Wrapper>;
};

