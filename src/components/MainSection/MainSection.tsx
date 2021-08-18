import './MainSection.css'
import Button from '@material-ui/core/Button';


export default function MainSection() {
    return (
        <div className='mainsection-root'>
            <div className="company_logo-div">
                <p className="company_logo">NICELAND</p>
                <footer className="main_buttons-footer">
                    <Button href="/intro_company" className="intro_button"  color="secondary" disableRipple={true}>
                        회사소개
                    </Button>
                    <Button href="/intro_businesss" className="intro_button"  color="secondary" disableRipple={true}>
                        사업소개
                    </Button>
                </footer>
            </div>
        </div>
    );
}

