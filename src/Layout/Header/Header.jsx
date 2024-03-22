import { Link } from "react-router-dom";
import headerLogo from "../../Assets/image/logo/h_logo.png";
import { NavLink } from "react-router-dom"; 


const Header = () => {
    return (
        <header>
            <div className="header_block">
                <Link to="/">
                    <img src={headerLogo} alt="Logo de Kasa" className="header_logo"/>
                </Link>
                <ul className="nav_list">
                    <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')} exact='true'>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                            À propos 
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;