
export default function NavItem({name} : { name : string}) {
    return (
                <li className="inline-block px-6 py-1 font-text
                hover:underline underline-offset-8 decoration-primary">
                    <a href="" className="cursor-none">{name}</a></li>
    )
}
