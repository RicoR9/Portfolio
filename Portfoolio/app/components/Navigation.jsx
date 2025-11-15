import { NavLink } from 'react-router'

function Navigation() {
    return (
        <nav className="flex gap-6">
            <ul className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-6">
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