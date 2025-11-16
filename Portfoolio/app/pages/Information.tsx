const Info = () => {
    return(
        <div className="flex flex-col items-center justify-center animate-slide-in-left gap-5">
            <h2 className="text-4xl font-serif mb-2">Information Page</h2>
            <p>Siia panen lingid, mis on veebilehtede tegemisel kasulikud:</p>
            <br></br>
            <p>Taustad, värvid - https://webgradients.com</p>
            <p>React animatsioonid, taustad jne - https://reactbits.dev</p>

            <a href="/" className="mt-96 bg-white/20 hover:bg-white/30 hover:scale-105 text-neutral-700 px-8 py-3 rounded-lg transition-all shadow-lg">
                Back
            </a>
        </div>
    )
}

export default Info;