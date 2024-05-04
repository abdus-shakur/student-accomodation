import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import { Box, Button, Switch, ThemeProvider, createTheme } from '@mui/material';

import * as col from './styles/colors'
import Body from './pages/Content/Body';
import Footer from './pages/Footer/Footer';
import { useState } from 'react';



function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  console.log(mode)
  
  //var primaryColor = color(import('variables.css').$primary-color) 
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Switch sx={{position:'fixed',zIndex:99999,top:'1rem',left:'10rem'}}
                checked={mode === 'dark'}
                onChange={toggleMode}
              />
        <Header />
        <Body></Body>
        <Footer />
      </div>
      </ThemeProvider>
    
  );
}

export default App;
