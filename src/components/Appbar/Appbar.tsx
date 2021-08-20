import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Appbar.css'


export default function PermanentAppBar() {
    return (
        <div className='appbar-root'>
            <AppBar position="static" className="appbar">
                <Toolbar className="toolbar">
                    <a href='/' className="logo-a">
                        <img alt="logo" color="inherit" src={process.env.PUBLIC_URL + '/logo.png'} className="logo"/>
                    </a>
                    <div className="info-text-div">
                        <p className="info-text">(주) 나이스랜드 | 경기도 용인시 처인구 외대로 46-1</p>
                        <p className="info-text">대표이사 김헌식 | T. 010-8438-1116</p>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

