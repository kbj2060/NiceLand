import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import PermanentAppBar from './components/Appbar/Appbar.tsx';
import MainSection from './components/MainSection/MainSection.tsx';
import IntroduceBusiness from './components/IntroduceBusiness/IntroduceBusiness'

import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import grey from '@material-ui/core/colors/grey';
import './App.css';
import BusinessDetail from "./components/BusinessDetail/BusinessDetail";
import { AnimatePresence } from "framer-motion";


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
        <AnimatePresence>
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
                            <Route path="/business_detail">
                                <BusinessDetail />
                            </Route>
                            <Route path="/">
                                <MainSection />
                            </Route>
                        </Switch>
                        
                        <footer className="info-footer">
                            <p className="info-text">(주) 나이스랜드 | 경기도 용인시 처인구 외대로 46-1</p>
                            <p className="info-text">대표이사 김헌식 | T. 010-8438-1116</p>
                            <p className="info-text">© NICELAND. ALL RIGHTS RESERVED.</p>
                        </footer>
                    </div>
                    
                </ThemeProvider>
            </Router>
        </AnimatePresence>
    );
}

export default App;
