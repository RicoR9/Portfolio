const Header = ({ name, logo, title, children }) => {
    return (
        <header className="p-6 shadow-lg fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img src={logo} alt="Logo" className="w-12 h-12"/>
                    <div>
                        <h1 className="text-3xl font-bold text-white">{name}</h1>
                        <p className="text-white/90">{title}</p>
                    </div>
                </div>
                {children}
            </div>
        </header>
    );
};

export default Header;