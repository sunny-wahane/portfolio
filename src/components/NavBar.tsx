import NavItem from "./NavItem";

function NavBar() {
    return (
       <div className="text-right px-20 py-10">
        <NavItem name="Home"/>
        <NavItem name="Work Experience"/>
        <NavItem name="Connect"/>
       </div>
    )
} 

export default NavBar;