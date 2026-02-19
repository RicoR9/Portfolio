const NoMatch = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-40 gap-6">
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <p className="text-xl text-white/80 ">Page Not Found</p>
            <a href="/" className="text-white px-6 py-3 rounded-lg transition-all">
                Go Home
            </a>
        </div>
    );
};

export default NoMatch;