import React from "react";
import StageItem from "app/containers/Stage/components/stage_item";
import * as S from "./../style";
import {observer} from "mobx-react-lite";
import {IUser} from "app/stores/UsersStore";

interface IProps {
    users: IUser[];
}

export const StageList: React.FC<IProps> = observer((props) => {

    return <S.List>
        {props.users.map((user, i) => <StageItem user={user} num={i + 1}/>
        )}
    </S.List>;
});

