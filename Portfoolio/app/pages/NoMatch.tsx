export async function loader() {
    return null;
}

const NoMatch = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <p className="text-xl text-white/80 mb-8">Page Not Found</p>
            <a href="/" className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg transition-all">
                Go Home
            </a>
        </div>
    );
};

export default NoMatch;