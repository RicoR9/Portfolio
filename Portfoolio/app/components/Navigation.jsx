import { NavLink } from 'react-router'

function Navigation() {
    return (
        <nav className="flex animate-slide-in-left">
            <ul className="flex flex-col gap-2 sm:gap-6 items-center bg-white/3 p-2 rounded-md text-white">
                <li>
                    <NavLink to="/">Kodu</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">Projektid</NavLink>
                </li>
                <li>
                    <NavLink to="/about">Minust</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Kontakt</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;