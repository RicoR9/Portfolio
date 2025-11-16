const Gallery = () => {
    return (
        <div className="w-[700px] rounded-2xl shadow-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Gallery Component</h2>
            <div className="flex gap-6 ">
            <img src="/gallery-placeholder.png" alt="Gallery Placeholder" className="w-full h-auto rounded-lg" />
            <img src="/gallery-placeholder2.png" alt="Gallery Placeholder 2" className="w-full h-auto rounded-lg mt-4" />
            <img src="/gallery-placeholder3.png" alt="Gallery Placeholder 3" className="w-full h-auto rounded-lg mt-4" />
            </div>
        </div>
    );
}

export default Gallery;