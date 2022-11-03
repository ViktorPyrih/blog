import './Logo.css';
import logo from "../assets/logo.svg";

function Logo({className = "", theme = ""}) {
    return (
        <div className={`logo ${className}`}>
            <img src={logo} alt="Spring UI" className="logo__img"/>
            <h2 className={"logo__title " + theme}>Spring UI</h2>
        </div>
    );
}

export default Logo;
