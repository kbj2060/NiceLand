import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { PAGEPATH } from '../../enums';
import './Appbar.css'


export default function PermanentAppBar() {
    return (
        <div className='appbar-root'>
            <AppBar position="static" className="appbar">
                <Toolbar className="toolbar">
                    <a href={PAGEPATH.MAIN} className="logo-a">
                        <img alt="logo" color="inherit" src={process.env.PUBLIC_URL + '/logo.png'} className="logo"/>
                    </a>
                </Toolbar>
            </AppBar>
        </div>
    );
}

