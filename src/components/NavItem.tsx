
export default function NavItem({name} : { name : string}) {
    return (
            <ul className="inline-block px-6 py-1 font-antic
            hover:underline underline-offset-8 decoration-turtle-green">{name}</ul>
    )
}
