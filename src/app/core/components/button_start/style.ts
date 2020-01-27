import styled from 'styled-components';

export const Button = styled.button`
    background: linear-gradient(to top, #FF460B 20%,#FED281 80% );
    border-radius: 15px;
    height: 50px;
    width: 180px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #FFFFFF;
    margin: 50px;
    box-shadow: 0px 2px 2px rgba(137,137,137,0.75);	
    &:hover,
	:focus {
		cursor: pointer;
	}
	&:active {
		transform: translate(1px, 1px);
		filter: saturate(150%);
	}
`;