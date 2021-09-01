import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import { PAGEPATH } from '../../enums';
import './Appbar.css'


export default function PermanentAppBar() {
    return (
        <div className='appbar-root'>
            <AppBar position="static" className="appbar">
                <Toolbar className="toolbar">
                    <Link to={PAGEPATH.MAIN} className="logo-a">
                        <img alt="logo" color="inherit" src={process.env.PUBLIC_URL + '/logo.png'} className="logo"/>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

