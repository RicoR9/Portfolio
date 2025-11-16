import ApiFetch from "../components/ApiFetch";
import ProfileCard from "../components/ProfileCard";
import Gallery from "../components/Gallery";
import Test from "../components/Test";

export function clientLoader() {
    return null;
}

const Home = () => {
    return (
        <section className="text-center select-none">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 lg:px-10 items-start">
                <div className="flex flex-col gap-12">
                    <Test />
                    <ProfileCard />
                    <Gallery />
                </div>

                <div className="flex justify-center">
                    <aside className="w-full shadow-xl overflow-y-scroll h-[800px] lg:h-[800px] rounded-xl p-6">
                        <h1 className="font-bold font-serif text-3xl">Fetch</h1>
                        <ApiFetch />
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default Home;