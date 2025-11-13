import { useState } from 'react';

function Header({name, title, children}) {
    const now = new Date();
    const datestring = now.toLocaleDateString();
    const [open, setOpen] = useState(false);

    return (
        <header>
            <h1>{name}</h1>
            <h2>{title}</h2>
            <p>{datestring}</p>
        </header>
    );
}

export default Header;