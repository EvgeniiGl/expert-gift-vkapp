import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const Title = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: rgba(51, 51, 51, 0.5);
`;

export const Row = styled.div`
    display:flex;
`;

export const WrapperUser = styled.div`
    display:flex;
    width: 100%;
`;

export const Img = styled.img`
margin: 50px;
    width: 120px;
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    &>:first-child{
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 21px;
        margin-bottom: 10px;
    }
    &>:nth-child(2){
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
    }
    &>:last-child{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
    }
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
    margin: 50px;
`;
