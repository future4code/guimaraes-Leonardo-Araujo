

import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import theme from './constants/theme';
import Router from './routes/Router';

function App() {
  return (
    <div className="App ">
      <ThemeProvider theme={theme}>

       <Router/>
      </ThemeProvider>
    </div>
  );
}

export default App;
