import './MainSection.css'
import Button from '@material-ui/core/Button';


export default function MainSection() {
    return (
        <div className='mainsection-root'>
            <div className="company_logo-div">
                <p className="company_logo">NICELAND</p>
                <div className="main_buttons-div">
                    <Button href={process.env.PUBLIC_URL + "/intro_company"} className="intro_button"  color="secondary" disableRipple={true}>
                        회사소개
                    </Button>
                    <Button href={process.env.PUBLIC_URL + "/business_detail"} className="intro_button"  color="secondary" disableRipple={true}>
                        사업소개
                    </Button>
                </div>
            </div>
        </div>
    );
}

