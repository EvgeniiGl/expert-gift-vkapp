import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    z-index: 2;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: rgba(0,0,0, 0.62); 
`;

export const Wrapper = styled.div`
    position: relative;
`;

export const Bg = styled.img` 
    height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  `;

export const Close = styled.div`
    right: 2%;
    position: absolute;
    height: 11%;
    top: 11%;
    padding: 0 16px;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    &:hover {
      opacity: 1;
    }
    &:after, &:before {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 33px;
      width: 3px;
      background-color: #fff;
    }
    &:after {
      transform: rotate(-45deg);
    }
    &:before {
      transform: rotate(45deg);
    }
  `;

export const Title = styled.div` 
    position: absolute;
    font-weight: 900;
    text-align: center;
    color: #fff;
    right: 50%;
    transform: translate(50%,-50%);
    font-size: 20px;
    top: 67%;
  `;

export const Text = styled.div`
    position: absolute;
    text-align: center;
    color: #fff;
    top: 72%;
    right: 50%;
    transform: translate(50%,-50%);
    font-weight: 500;
    font-size: 16px;
  `;

export const Button = styled.div` 
    position: absolute;
    font-weight: 900;
    text-align: center;
    color: #fff;
    right: 50%;
    transform: translate(50%,-50%);
    padding: 16px;
    background: linear-gradient(360deg, #FF460B 0%, #FED281 110.23%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    bottom: 4%;
    font-size: 16px;
  `;

export const StageName = styled.div` 
    position: absolute;
    font-weight: 900;
    text-align: center;
    color: #fff;
    right: 50%;
    transform: translate(50%,-50%);
    font-size: 26px;
    top: 60%;
  `;
