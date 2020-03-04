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
    height: 100%;
    & .slick-next {
        right: 0;
    }
`;

export const Wrapper = styled.div`
    width: 100%;    
    text-align: center;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const ImgGift = styled.img`
    height: 250px;
    border-radius: 10px;
    margin: 0 auto;
`;

const Circle = styled.div`
    border-radius: 50%;
    &:hover,
	:focus {
		cursor: pointer;
	}
	&:active {
		transform: translate(1px, 1px);
		filter: saturate(150%);
	}
`;

export const CircleLike = styled(Circle)`
    background: #16C2B7;
    padding: 10px 10px 10px 12px;
`;

export const CircleRepost = styled(Circle)`
    background: #0085FF;
    padding: 14px;
`;

export const CircleDislike = styled(Circle)`
    background: #FF3D00;
    padding: 15px 12px 7px 10px;
`;

export const Like = styled.img`
    width: 34px;
`;

export const Repost = styled.img`
    width: 24px;
`;

export const WrapperScore = styled.div`    position: absolute;
    bottom: 0;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100000;
    transform: translate(-50%, 50%);
    left: 50%;
    min-width: 180px;
    bottom: 30px;
`;

export const Hidden = styled.div` 
    height: 10px;
`;

