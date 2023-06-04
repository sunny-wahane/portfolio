import NavItem from "./NavItem";

function NavBar() {
    return (
       <ul className="text-right px-20 py-10">
        <NavItem name="Home"/>
        <NavItem name="Work Experience"/>
        <NavItem name="Projects"/>
        <NavItem name="Connect"/>
       </ul>
    )
} 

export default NavBar;