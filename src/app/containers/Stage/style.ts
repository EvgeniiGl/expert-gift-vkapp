import styled from 'styled-components';

export enum NumColor {
    gray = '#9E9899',
    green = '#16C2B7',
    orange = '#ED8A19',
    red = '#EB2E4A',
}

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const Text = styled.div`
    width: 80%;
    font-weight: bold;
    font-size: 14px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`;

export const Num = styled.div<{ color: NumColor }>`
    border-radius: 50%;
    background: ${({color}) => color};
    padding: 6px;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    min-width: 16px;
    text-align: center;
    margin: 0 20px;
`;

export const Avatar = styled.img`
    border-radius: 50%;
    max-width: 50px;
    margin: 10px;
`;

export const Img = styled.img`
`;

export const Name = styled.div`
    font-weight: bold;
    font-size: 14px;
    margin: 0 8px;
`;

export const List = styled.ul`
    width: 80%;
    padding: 0;
`;

export const Item = styled.li`
    background: #F4F4F4;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    display: flex;
    align-items: center;
    margin: 10px 0;
`;

export const Score = styled.div`
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    background: #673AB7;
    border-radius: 5px;
    padding: 5px;
    margin-left: auto;
    margin-right: 20px;
`;

export const HiddenBottom = styled.div`
`;
