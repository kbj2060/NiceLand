import './MainSection.css'
import Button from '@material-ui/core/Button';


export default function MainSection() {
    return (
        <div className='mainsection-root'>
            <div className="company_logo-div">
                <a className="company_logo" rel="noreferrer" href="http://localhost:3000/" target="_blank">NICELAND</a>
                <footer className="main_buttons-footer">
                    <Button className="intro_button"  color="secondary" disableRipple={true}>
                        회사소개
                    </Button>
                    <Button className="intro_button"  color="secondary" disableRipple={true}>
                        사업소개
                    </Button>
                </footer>
            </div>
        </div>
    );
}

