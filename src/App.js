import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import { Box, Button, CssBaseline, Switch, ThemeProvider, createTheme } from '@mui/material';

import * as col from './styles/colors'
import Body from './pages/Content/Body';
import Footer from './pages/Footer/Footer';
import { useState } from 'react';
import PageRouter from './PageRouter';



function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const GlobalStyles = () => (
    <style>
      {`
        @supports (color-scheme: light dark) {
          html {
            color-scheme: ${mode==='dark'?'dark':'light'};
          }
        }
      `}
    </style>
  );
  
  //var primaryColor = color(import('variables.css').$primary-color) 
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
      <GlobalStyles />
      <div className="App">
      <Switch sx={{position:'fixed',zIndex:99999,top:'1rem',left:'10rem'}}
                checked={mode === 'dark'}
                onChange={toggleMode}
              />
        <PageRouter/>
      </div>
      </ThemeProvider>
    
  );
}

export default App;
