const Test = () => {
    return(
        <div className="animate-slide-in-left relative flex flex-col items-center">
            <img src="/logo.svg" alt="Logo" className="absolute left-1/2 -translate-x-1/2 w-64 h-84 opacity-80 -z-20"/>

            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-6xl font-bold text-white mb-4">Rico Rimm</h1>
                <h3 className="text-2xl text-white/80">FrontEnd Developer</h3>
            </div>
        </div>
    )
};

export default Test;