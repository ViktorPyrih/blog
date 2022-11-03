import './Footer.css';
import Logo from "../Logo";

function Footer() {
    return (
        <footer className="background_blue">
            <div className="footer wrapper">
                <Logo className="footer__logo" theme="color_white"/>
                <p className="footer__copyright">&copy; 2077 Untitled UI. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
