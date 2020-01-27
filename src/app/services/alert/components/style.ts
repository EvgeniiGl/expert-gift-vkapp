import styled from 'styled-components';

export const Container = styled.div<{ bottom: string, color: string }>` 
    transition: top, bottom;
    transition-duration: 0.7s;
    position: fixed;
    bottom: ${({bottom}) => bottom}px;
    right: 0;
    color: ${({color}) => !!color ? color : 'red'};
    border: 1px solid ${({color}) => !!color ? color : 'red'};
    border-radius: 10px;
    max-width: 380px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40px;
    background: #fff;
    margin: 20px 40px;
    z-index: 10000;
    padding: 10px;
    text-align: center;
   @media (max-width: 460px) {
        margin: 20px 0;
    }
`