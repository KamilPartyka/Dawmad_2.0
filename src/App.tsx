import { ThemeProvider } from 'styled-components';
import Button from './components/Button/Button';
import { theme } from './theme/mainTheme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Button color="secondary">Hello</Button>
  </ThemeProvider>
);

export default App;
