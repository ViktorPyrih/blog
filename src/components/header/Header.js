import './Header.css';
import menuIcon from "../../assets/menu.svg";
import Logo from "../Logo";
import NavBar, {NAV_LINKS} from "../navigation/NavBar";
import SignInUpBar from "../navigation/SignInUpBar";
import DeviceAware from "../DeviceAware";
import {Menu} from "@headlessui/react";
import NavLink from "../navigation/NavLink";

function Header() {
    const standardNav = (
        <div className="nav-container">
            <NavBar/>
            <SignInUpBar/>
        </div>
    );
    const mobileNav = (
        <Menu>
            <Menu.Button className="header-menu__btn">
                <img src={menuIcon} alt="Menu" className="header-menu__img"/>
            </Menu.Button>
            <Menu.Items className="header-menu__items background_white" as="nav">
                {
                    NAV_LINKS.map((link, i) => (
                        <Menu.Item key={i}>
                            {
                                ({active}) => (
                                    <NavLink to={link.to} className={`menu__link ${active && "menu__link_active"}`}>
                                        {link.label}
                                    </NavLink>
                                )
                            }
                        </Menu.Item>
                    ))
                }
            </Menu.Items>
        </Menu>
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
