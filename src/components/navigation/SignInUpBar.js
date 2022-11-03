import './SignInUpBar.css';
import {Link} from "react-router-dom";

function SignInUpBar() {
    return (
        <div className="sign-bar">
            <Link to="/" className="sign-bar__login">Log in</Link>
            <Link to="/" className="sign-bar__sign-up">Sign up</Link>
        </div>
    );
}

export default SignInUpBar;
