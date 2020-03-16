import React from 'react';
import * as S from "./../style";
import {NumColor} from "./../style";
import avatar from "@img/avatar.svg";
import diamond from "@img/diamond.svg";
import {IUser} from "app/stores/UsersStore";

interface IProps {
    user: IUser
    num: number
}


const StageItem: React.FC<IProps> = (props) => {
    let color = NumColor.gray;
    switch (props.num) {
        case 1:
            color = NumColor.green;
            break;
        case 2:
            color = NumColor.orange;
            break;
        case 3:
            color = NumColor.red;
            break;
    }
    return (
        <S.Item>
            <S.Num color={color}>{props.num}</S.Num>
            <S.Avatar src={props.user.photo_200 || avatar}/>
            <S.Name>{`${props.user.first_name} ${props.user.last_name}`}</S.Name>
            <S.Img src={diamond}/>
            <S.Score>{props.user.score}</S.Score>
        </S.Item>
    );
};

export default StageItem;
