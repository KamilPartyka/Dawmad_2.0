import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button.tsx tests', () => {
  test('should render button', () => {
    render(<Button>Button</Button>);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
