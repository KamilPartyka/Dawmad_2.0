import styled, { css } from 'styled-components';
import { ButtonProps } from './types';

export const StyledButton = styled.button<ButtonProps>`
  ${({ theme, color }) => css`
    background-color: ${theme.color.palette[color]};
    border-radius: 5rem;
    padding: 1rem 3rem;
    border: none;
    cursor: pointer;
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.size.sm};
    color: ${theme.color.common.white};
    box-shadow: ${theme.shadows.box};
    text-transform: uppercase;
  `}
`;
