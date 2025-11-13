import { NavLink } from 'react-router'

function Navigation() {
    return (
        <nav>
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
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