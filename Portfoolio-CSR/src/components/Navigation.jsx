import { NavLink } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="flex">
            <ul className="font-serif text-2xl flex flex-col gap-20 sm:gap-12 items-center bg-white/3 p-2 rounded-md text-white">
                <li className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                    <a href="https://ricoportfolio.eu/shop" className="bg-white/10 backdrop-blur-md md:bg-transparent md:backdrop-blur-0 px-6 py-2 rounded-lg md:p-0 shadow-lg md:shadow-none">LemmikuAbi</a>
                </li>
                <li className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                    <NavLink to="/information" className="bg-white/10 backdrop-blur-md md:bg-transparent md:backdrop-blur-0 px-6 py-2 rounded-lg md:p-0 shadow-lg md:shadow-none">Info</NavLink>
                </li>
                <li className="animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                    <NavLink to="/about" className="bg-white/10 backdrop-blur-md md:bg-transparent md:backdrop-blur-0 px-6 py-2 rounded-lg md:p-0 shadow-lg md:shadow-none">Minust</NavLink>
                </li>
                <li className="animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
                    <NavLink to="/contact" className="bg-white/10 backdrop-blur-md md:bg-transparent md:backdrop-blur-0 px-6 py-2 rounded-lg md:p-0 shadow-lg md:shadow-none">Kontakt</NavLink>
                </li>
                <li className="animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
                    <NavLink to="/" className="bg-white/10 backdrop-blur-md md:bg-transparent md:backdrop-blur-0 px-6 py-2 rounded-lg md:p-0 shadow-lg md:shadow-none">Kodu</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;