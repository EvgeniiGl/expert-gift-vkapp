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
	height: 600px;
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
    font-size: 24px;
    text-align: center;
    color: #fff;
    top: 68%;
    right: 50%;
    transform: translate(50%,-50%);
  `;

export const Text = styled.div`
    position: absolute;
    font-weight: 900;
    font-size: 20px;
    text-align: center;
    color: #fff;
    top: 73%;
    right: 50%;
    transform: translate(50%,-50%); 
  `;

export const Button = styled.div` 
    position: absolute;
    font-weight: 900;
    font-size: 20px;
    text-align: center;
    color: #fff;
    bottom: 10%;
    right: 50%;
    transform: translate(50%,-50%);
    padding: 16px;
    background: linear-gradient(360deg, #FF460B 0%, #FED281 110.23%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
  `;
