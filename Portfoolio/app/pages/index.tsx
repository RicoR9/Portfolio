import Test from "../components/Test";
import Navigation from "../components/Navigation";


const Home = () => {
    return (
        <section className="text-center select-none">
            <div className="grid lg:grid-cols-2 gap-12 lg:px-10 items-start">
                {/* Vasakpool */}
                <div className="flex flex-col gap-16 items-center mt-10">
                    <Test />
                    <Navigation />
                </div>

                {/* Parempool */}
                <div className="flex justify-end items-start">
                </div>
            </div>
        </section>
    )
}

export default Home;