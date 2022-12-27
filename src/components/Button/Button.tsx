import { StyledButton } from './styles';
import { ButtonProps } from './types';

const Button = ({ children, onClick, color }: ButtonProps) => (
  <StyledButton type="button" color={color} onClick={onClick}>
    {children}
  </StyledButton>
);

export default Button;
