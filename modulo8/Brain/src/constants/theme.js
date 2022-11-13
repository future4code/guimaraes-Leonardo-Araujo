import { createTheme } from '@mui/material/styles';
import { diaDeSorteColor, lotofacilColor, lotoManiaColor, megaSenaColor, quinaColor, timeManiaColor } from './colors';


const theme = createTheme({
  palette: {
    megaSena: {
      main: megaSenaColor,
      contrastText: "white"
    },
    quina: {
        main: quinaColor,
        contrastText: "white"
    },
    lotofacil: {
        main: lotofacilColor,
        contrastText: "white"
    },
    lotomania: {
        main: lotoManiaColor,
        contrastText: "white"
    },
    timeMania: {
        main: timeManiaColor,
        contrastText: "white"
    },
    diaDeSorte: {
        main: diaDeSorteColor,
        contrastText: "white"
    },
  },
});
export default theme;