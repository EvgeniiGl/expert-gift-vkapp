import React from "react";
import {ScreenEnum} from "app/stores/ScreenStore";
import * as S from './style'

interface Props{
    setScreen:(screen:ScreenEnum)=>void
}

export const ButtonStart:React.FC<Props> = ({setScreen})=> <S.Button onClick={()=>setScreen(ScreenEnum.ListGift)}>Поехали</S.Button>