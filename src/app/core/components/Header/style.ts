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
    height: 98px;
    ${({active}) => active && 'background: #ECE6F5;'};
    text-align: center;
`;

export const Img = styled.img`
    width: 76px;
`;

export const ImgGiftsList = styled.img`
    width: 60px;
`;

export const Avatar = styled.img`
    width: 86px;
`;

export const Info = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    align-items: center;
    border-right: 2px solid #D7D7D7;
`;

export const Stage = styled.div` 
    font-weight: bold;
    font-size: 16px;
    color: #230741;
    line-height: 24px;
`;

export const Score = styled.div`
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #ED8A19;
`;
