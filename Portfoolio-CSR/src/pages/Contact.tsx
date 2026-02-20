import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Kontakt</h1>
            <br></br>
            <p>Ühenduse võtmiseks:</p>
            <br></br>
            <p>rico.rimm@gmail.com</p>
            <br></br>
            <p>või</p>
            <br></br>
            <p>+372 56810100</p>
            <Link to="/" className="inline-block w-80 bg-white/20 hover:bg-white/30 hover:scale-105 text-black font-semibold px-8 py-3 rounded-lg transition-all shadow-lg text-center">
            Back </Link>
        </div>
    );
};

export default Contact;