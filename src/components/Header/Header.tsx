import { NavLink } from "react-router-dom";
import HeaderStyles from "./Header.module.scss";
import Logo from "../../assets/shared/logo.svg";
import useToggle from "../../hooks/useToggle";
import Hamburger from "../Hamburger/Hamburger";

const Header: React.FC = () => {
    const [expanded, setExpanded] = useToggle();
    return (
        <header className={HeaderStyles.header}>
            <img src={Logo} alt="Logo" className={HeaderStyles.logo} />
            <Hamburger onClick={() => setExpanded()} expanded={expanded} controls="navigation" />
            <nav id="navigation">
                <ul className={`${HeaderStyles.navigation} ${expanded ? HeaderStyles.active : ""}`}>
                    <li>
                        <NavLink
                            to="/"
                            className={(navData) => (navData.isActive ? HeaderStyles.active : "")}
                            onClick={() => setExpanded(false)}
                        >
                            <span>00</span>Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/destination"
                            className={(navData) => (navData.isActive ? HeaderStyles.active : "")}
                            onClick={() => setExpanded(false)}
                        >
                            <span>01</span>Destination
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/crew"
                            className={(navData) => (navData.isActive ? HeaderStyles.active : "")}
                            onClick={() => setExpanded(false)}
                        >
                            <span>02</span>Crew
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/technology"
                            className={(navData) => (navData.isActive ? HeaderStyles.active : "")}
                            onClick={() => setExpanded(false)}
                        >
                            <span>03</span>Technology
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
export default Header;
