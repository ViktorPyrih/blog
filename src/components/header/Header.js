import './Header.css';
import Logo from "../Logo";
import NavBar from "../navigation/NavBar";
import SignInUpBar from "../navigation/SignInUpBar";
import DeviceAware from "../DeviceAware";
import menuIcon from "../../assets/menu.svg";
import {Link} from "react-router-dom";

function Header() {
    const standardNav = (
        <div className="nav-container">
            <NavBar/>
            <SignInUpBar/>
        </div>
    )
    const mobileNav = (
        <Link to="/" className="header_menu-link">
            <img src={menuIcon} alt="Menu" className="header_menu-img"/>
        </Link>
    );
    return (
        <header className="background_white">
            <div className="header wrapper">
                <Logo className="header__logo" theme="color_black"/>
                <DeviceAware standard={standardNav} mobile={mobileNav}/>
            </div>
        </header>
    );
}

export default Header;
