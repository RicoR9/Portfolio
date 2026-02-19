import Main from "../components/Main";
import Navigation from "../components/Navigation";


const Home = () => {
    return (
        <section className="text-center select-none">
            <div className="grid lg:grid-cols-2 gap-12 lg:px-10 items-start">
                {/* Vasakpool */}
                <div className="flex flex-col gap-16 items-center mt-10">
                    <Main />
                    <Navigation />
                </div>

                {/* Parempool */}
                <div className="animate-slide-in-right rounded-xl shadow-2xl p-8 w-full max-w-lg mx-auto">
                    <div className="">
                        <img
                            src="/profile.jpg"
                            alt="Rico Rimm"
                            className=" w-full h-auto rounded-lg border-4 border-gray-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;