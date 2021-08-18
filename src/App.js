import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import PermanentAppBar from './components/Appbar/Appbar.tsx';
import MainSection from './components/MainSection/MainSection.tsx';
import IntroduceBusiness from './components/IntroduceBusiness/IntroduceBusiness'

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
        <Router>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <PermanentAppBar />
                    <Switch>
                        <Route path="/intro_company">
                            
                        </Route>
                        <Route path="/intro_businesss">
                            <IntroduceBusiness />
                        </Route>
                        <Route path="/">
                            <MainSection />
                        </Route>
                    </Switch>
                </div>
                
            </ThemeProvider>
        </Router>
    );
}

export default App;
