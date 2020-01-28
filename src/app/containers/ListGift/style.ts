import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
`;

export const SliderContainer = styled.div`
    min-width: 360px;
    width: 100%;
    cursor:pointer;
    height: 100%;
    & .slick-next {
        right: 0;
    }
`;

export const Wrapper = styled.div`
    width: 100%;    
    text-align: center;
`;

export const ImgGift = styled.img`
   height: 250px;
    border-radius: 10px;
    margin: 0 auto;
`;

const Circle = styled.div`
    border-radius: 50%;
    position: absolute;
    border: 2px solid #BAB5B5;
`;

export const CircleLike = styled(Circle)<{ active?: boolean }>`
    left: 54%;
    transform: translate(-50%, -50%);
    background: ${({active}) => active ? "#00D27A" : "#fff"};
    padding: 10px 10px 10px 12px;
    ${({active}) => active && 'border: 2px solid #00D27A;'} 
`;

export const CircleDislike = styled(Circle)<{ active?: boolean }>`
    left: 61%;
    transform: translate(-50%, -50%);
    background: ${({active}) => active ? "#FF3D00" : "#fff"};
    padding: 15px 12px 7px 10px;
    ${({active}) => active && 'border: 2px solid #FF3D00;'};
    margin: 0 20px;
`;

export const Like = styled.img`
    width: 34px;
`;

export const WrapperScore = styled.div`
    position:relative;
    height: 30px;
`;

