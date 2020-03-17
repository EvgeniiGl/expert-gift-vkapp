import styled from 'styled-components';
import img2 from "@img/bg.svg";

export const Container = styled.div`
    display: flex;
    align-items: center;
    min-height:100vh;
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    background-color: #230741;
    flex-direction: column;
    justify-content: space-around;
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 41px;
    text-align: center;
    color: #FCD784;
`;

export const WrapperUser = styled.div`
    display:flex;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    max-width: 156px;
    margin: 0 20px;
`;

export const UserInfo = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


