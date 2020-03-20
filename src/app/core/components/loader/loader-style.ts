import styled, {css} from 'styled-components';

const baseContainerStyles = css`
    display: flex;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0.3;
    background: #2c2d2e;
`;

const styleAbsolute = css`
  position: fixed;
`;

export const Container = styled.div<{ show: boolean, inside?: boolean }>`
    ${baseContainerStyles}
    ${styleAbsolute}
    ${({show}) => !show && "display: none;"}
`;
