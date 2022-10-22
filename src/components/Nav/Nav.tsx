import { NavItem } from "../NavItem/NavItem"
import { NavLogo } from "../NavLogo/NavLogo"
import './Nav.css'

export const Nav = () => {
    return <nav className="navbar">
        {/* <div className="nav-logo">
            <NavLogo />
        </div> */}
        <div className="nav-items">
            <NavItem value="home"/>
            <NavItem value="expertise"/>
            <NavItem value="work"/>
            <NavItem value="contact"/>
        </div>
    </nav>
}