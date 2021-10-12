import { Fragment } from "react";
import logo from '../images/genericLogo.png';


const Header = () => {
    return (
        <Fragment>
            <nav id="header" className="navbar navbar-custom">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <div className="d-flex">
                        <button className="btn pill-btn-small-1">log-in</button>
                        <button className="btn pill-btn-small-2">Sign Up</button>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
}

export default Header;
