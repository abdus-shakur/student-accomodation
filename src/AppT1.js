import { Box, Button, Switch, ThemeProvider, createTheme } from '@mui/material';
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

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch
          checked={mode === 'dark'}
          onChange={toggleMode}
          inputProps={{ 'aria-label': 'toggle dark/light mode' }}
        />
        <Box sx={{backgroundColor:(theme)=>theme.palette.background.default}}>
        <Button variant="contained" color="error">
          Test
        </Button>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
