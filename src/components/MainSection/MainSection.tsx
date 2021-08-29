import './MainSection.css'
import Button from '@material-ui/core/Button';
import { PAGEPATH } from '../../enums';
import { Link } from 'react-router-dom';


export default function MainSection() {
    return (
        <div className='mainsection-root'>
            <div className="company_logo-div">
                <p className="company_logo">NICELAND</p>
                <div className="main_buttons-div">
                    <Button className="intro_button"  color="secondary" disableRipple={true}>
                        <Link to={PAGEPATH.INTRO_COMPANY} >
                        회사소개
                        </Link>
                    </Button>
                    <Button className="intro_button"  color="secondary" disableRipple={true}>
                        <Link to={PAGEPATH.INTRO_BUSINESS} >
                        사업소개
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}

