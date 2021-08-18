import PermanentAppBar from './components/Appbar/Appbar.tsx';
import MainSection from './components/MainSection/MainSection.tsx';

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import grey from '@material-ui/core/colors/grey';

import './App.css';

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
                <MainSection />
            </div>
        </ThemeProvider>
    );
}

export default App;
