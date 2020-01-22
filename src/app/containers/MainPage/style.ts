import styled from 'styled-components';
import img2 from "@img/bg.svg";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
    font-family: Roboto;
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
    margin-right: 30px;
`;

export const UserInfo = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Button = styled.button`
        background: linear-gradient(to top, #FF460B 20%,#FED281 80% );
    border-radius: 15px;
    height: 50px;
    width: 180px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
`;