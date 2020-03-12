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
    opacity: 0.1;
`;

const styleInside = css`
  position: relative;
`;

const styleAbsolute = css`
  position: absolute;
`;

export const Container = styled.div<{ show: boolean, inside?: boolean }>`
    ${baseContainerStyles}
    ${({inside}) => inside ? styleInside : styleAbsolute}
    ${({show}) => !show && "display: none;"}
`;
