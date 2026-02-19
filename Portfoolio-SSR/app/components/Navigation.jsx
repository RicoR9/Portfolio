import { NavLink } from 'react-router'

function Navigation() {
    return (
        <nav className="flex">
            <ul className="font-serif text-2xl flex flex-col gap-24 sm:gap-12 items-center bg-white/3 p-2 rounded-md text-white">
                <li className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                    <NavLink to="/">Kodu</NavLink>
                </li>
                <li className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                    <NavLink to="/information">Info</NavLink>
                </li>
                <li className="animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                    <NavLink to="/about">Minust</NavLink>
                </li>
                <li className="animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                    <NavLink to="/contact">Kontakt</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;