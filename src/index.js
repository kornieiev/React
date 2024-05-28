import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
// import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#fafafa',
    black: '#212121',
    accent: 'red',
  },
  radii: {
    small: '4px',
    medium: '12px',
    large: '16px',
  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
