import { render, screen } from '@testing-library/react';
import App from './App';

describe('App.tsx tests', () => {
  test('should render', () => {
    render(<App />);

    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
