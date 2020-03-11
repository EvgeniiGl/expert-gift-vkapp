import styled from 'styled-components';

export const Container = styled.div`
    background: #F4F4F4;
    box-shadow: 0px 4px 4px rgba(15,0,43,0.25);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    height: 15vh;
`;

export const Tab = styled.div<{ active?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    ${({active}) => active && 'border-bottom:#ED8A19 3px solid;'};
    height: 89px;
    ${({active}) => active && 'background: #ECE6F5;'};
    text-align: center;
`;

export const Img = styled.img`
    width: 76px;
`;

export const Avatar = styled.img`
    width: 86px;
`;

export const Score = styled.div`
    position: absolute;
font-style: normal;
font-weight: 900;
font-size: 16px;
line-height: 14px;

color: #FFFFFF;
`;
