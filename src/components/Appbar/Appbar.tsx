import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Appbar.css'


export default function PermanentAppBar() {
    return (
        <div className='appbar-root'>
            <AppBar position="static" className="appbar">
                <Toolbar className="toolbar">
                    {/* 
                    TODO: 메인 페이지 벗어나면 메뉴가 생길 것.
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <div className="logo-div">
                        <img alt="logo" color="inherit" src={process.env.PUBLIC_URL + '/logo.png'} className="logo"/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

