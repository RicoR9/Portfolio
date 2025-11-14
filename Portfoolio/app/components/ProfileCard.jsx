const ProfileCard = () => {
    return (
        <div className="w-[700px] rounded-2xl shadow-2xl p-8 ">
            <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-lg overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-800 flex items-center justify-center text-6xl font-bold text-white">
                        <img src="/IMG_6696.jpg" alt="Profile" className="w-full h-full object-cover" />
                    </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mt-6">
                    Rico Rimm
                </h2>
                <p className="text-white/90 text-lg mt-2">
                    Frontend Developer
                </p>
                
                
                <div className="w-full mt-8 space-y-4">
                    <div>
                        <div className="flex justify-between text-white/90 text-sm mb-1">
                            <span>React</span>
                            <span>90%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-white h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex justify-between text-white/90 text-sm mb-1">
                            <span>JavaScript</span>
                            <span>85%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-white h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex justify-between text-white/90 text-sm mb-1">
                            <span>Tailwind CSS</span>
                            <span>95%</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-white h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                    </div>
                </div>
                
                
                <button className="w-full mt-6 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-semibold py-3 rounded-lg transition-all">
                    Rohkem infot
                </button>
                
            </div>
        </div>
    );
};

export default ProfileCard;