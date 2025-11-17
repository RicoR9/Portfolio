const Info = () => {
    return(
        <div className="max-w-4xl mt-[-50px] mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-center animate-slide-in-right">
            <h2 className="text-4xl font-serif mb-2">Information Page</h2>
                <p>Siia panen lingid, mis on veebilehtede tegemisel kasulikud:</p>
                <br></br>

                <div className="w-full rounded-lg p-6 mb-6 text-center">
                    <p>Taustad, värvid - https://webgradients.com</p>
                    <p>React animatsioonid, taustad jne - https://reactbits.dev</p>
                </div>

            <a href="/" className="inline-block w-80 bg-white/20 hover:bg-white/30 hover:scale-105 text-black font-semibold px-8 py-3 rounded-lg transition-all shadow-lg text-center">
            Back </a>
        </div>
    )
}

export default Info;