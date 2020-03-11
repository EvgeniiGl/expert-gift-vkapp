import styled from 'styled-components';

export const Button = styled.div<{ disabled: boolean }>`
    display:flex;
    justify-content: center;
    align-items:center;
    border-radius: 15px;
    height: 50px;
    width: 180px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    background: linear-gradient(0deg, ${({disabled}) => disabled ? "#230741" : "#FF460B"} 0%, #FED281 100%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.33);
    &:hover,
	:focus {
		cursor: pointer;
	}
	&:active {
		transform: translate(1px, 1px);
		filter: saturate(150%);
	}
`;
