import styled from 'styled-components';
import {isMobile} from "app/core/helpers/detect_mobile";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const Title = styled.h1`
    font-weight: 600;
    font-size: 16px;
    
`;

export const Avatar = styled.img`
    border-radius: 50%;
    max-width: 80px;
    margin: 10px 30px;
`;

export const UserInfo = isMobile
    ? styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`
    : styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const Status = styled.div`
    font-weight: 600;
    font-size: 20px;
    color: #311B92;
`;

export const Arrow = styled.span`
    font-size: 14px;
    margin: 20px;
    color: #888;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const WrapperUser = isMobile
    ? styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 4px 4px rgba(15,0,43,0.25);
    flex-direction: column;
`
    : styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0px 4px 4px rgba(15,0,43,0.25);
`;

export const Text = styled.div<{ bold?: boolean, bottom?: number, top?: number }>`
    font-size: 14px;
    font-weight: ${(props) => props.bold ? 'bold' : '500'};
    margin-bottom: ${(props) => props.bottom || 3}px;
    margin-top: ${(props) => props.top || 3}px;
`;

export const SliderText = styled.div`
    font-size: 14px;
    width: 80%;
    margin-bottom: 12px;
    transform: translate(10%, 0px);
`;

export const Slider = isMobile
    ? styled.div`
    width: 100%;
    text-align:center;
    margin-bottom: 20px;
`
    : styled.div`
    width: 100%;
    text-align:center;
`;

export const WrapSlider = styled.div`
    position: relative; 
    transform: translate(10%, 0px);
`;

export const Main = styled.div`
    margin: 20px 50px 0;
`;

export const Wrap = styled.div`
    display: flex;
`;

export const Col = isMobile
    ? styled.div`
    margin-right: 20px;
`
    : styled.div`
    margin-right: 150px;
`;

export const ScoreSlider = styled.div<{ width: number }>`
    width: ${props => `${props.width}`}%;
    height: 14px;
    background: #ED8A19;
    position: absolute;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    &::after {
        width: 80%;
        height: 6px;
        background: #F0A147;
        position: absolute;
        border-radius: 4px;
        content: "";
        top: 1px;
    }
`;

export const Strip = styled.div`
    width: 80%;
    height:14px;
    background: #D7D7D7;
    border-radius: 10px;
`;

export const Score = styled.div<{ width: number }>`
    width: 80%;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    &>:nth-child(1){
        width: ${props => `${props.width}`}%;
        text-align: initial;
    }
    &>:nth-child(2){
    display:${props => props.width < 6 || props.width > 87 ? 'none' : 'block'};
        margin-right: auto;
    }
`;

