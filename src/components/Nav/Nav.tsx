import { NavItem } from "../NavItem/NavItem"
import './Nav.css'

export const Nav = () => {
    return <nav className="navbar">
        <div className="nav-items">
            <NavItem value="Home"/>
            <NavItem value="Projects"/>
            <NavItem value="Work"/>
            <NavItem value="Contact"/>
            <NavItem value="Resume"/>
        </div>
    </nav>
}