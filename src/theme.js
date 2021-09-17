import { createTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';

const theme = createTheme({
  palette: {
    primary: {
      //main: purple[500],
      main: "#764abc",
    },
    secondary: {
      //main: green[500],
      //main: "#fff",
      main: yellow[500],
    },
  },
});

export default theme;