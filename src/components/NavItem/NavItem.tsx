import './NavItem.css'

export const NavItem = (props: NavItemValue) => {
    return <div className="item">
        // { props.value }
    </div>
}

interface NavItemValue {
    value: string
}