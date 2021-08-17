import './App.css';
import PermanentAppBar from './components/Appbar/Appbar.tsx';
import { createTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
    secondary: {
      main: grey[900],
    },
  },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <PermanentAppBar />
                
            </div>
        </ThemeProvider>
    );
}

export default App;
