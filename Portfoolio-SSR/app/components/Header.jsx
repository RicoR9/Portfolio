const Header = ({ name, logo, title, children }) => {
    return (
        <header className="flex md:flex-row items-center gap-12">
            <img src={logo} alt="Logo" className="w-12 h-12"/>
            <h1 className="">{title}</h1>
        </header>
    );
};

export default Header;