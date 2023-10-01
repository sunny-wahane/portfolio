import NavItem from "./NavItem";
import data from "../content/NavOptions.json"


function NavBar() {
    return (
       <ul className="text-right px-20 py-10">
        {data.items.map((item) => (
            <NavItem name={item}/>
        ))}
       </ul>
    )
} 

export default NavBar;