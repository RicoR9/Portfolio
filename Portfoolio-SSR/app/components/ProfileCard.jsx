const ProfileCard = () => {
    return (
        <div className="max-w-4xl mt-[-50px] mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 animate-slide-in-right">
            <div className="flex flex-col items-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 shadow-xl mb-6">
                    <img 
                        src="/profile.jpg" 
                        alt="Rico Rimm" 
                        className="w-full h-full object-cover"
                    />
                </div>

                <h2 className="text-4xl font-bold text-black mb-2">Rico Rimm</h2>
                <p className="text-xl text-black mb-8">Frontend Developer</p>

                <div className="w-full rounded-lg p-6 mb-6 text-center">
                    <h3 className="text-2xl font-semibold text-black mb-3">Minust</h3>
                    <p className="text-black leading-relaxed">
                        Tere! Olen Rico Rimm, frontend arendaja Eestist. Mulle meeldib luua 
                        kaasaegseid ja kasutajasõbralikke veebilahendusi React, Tailwind CSS 
                        ja teiste tehnoloogiatega. Hetkel õpin Tallinna Ülikoolis Rakendusinformaatika eriala.
                        Hetkel käimas 2. aasta. Olen väga huvitatud just Frontend poole pealt, avatud igale pakkumisele
                        ja võimalusele                  </p>
                </div>

                <div className="w-full rounded-lg p-6 mb-6 text-center">
                    <h3 className="text-2xl font-semibold text-black mb-4">Oskused</h3>
                    <div className=" gap-3 text-center">
                        <span className="px-4 py-2 bg-white/10 rounded-full text-black text-sm">React</span>
                        <span className="px-4 py-2 bg-white/10 rounded-full text-black text-sm">JavaScript</span>
                        <span className="px-4 py-2 bg-white/10 rounded-full text-black text-sm">Tailwind CSS</span>
                        <span className="px-4 py-2 bg-white/10 rounded-full text-black text-sm">HTML/CSS</span>
                        <span className="px-4 py-2 bg-white/10 rounded-full text-black text-sm">Git</span>
                    </div>
                </div>

                <a href="/" className="inline-block w-80 bg-white/20 hover:bg-white/30 hover:scale-105 text-black font-semibold px-8 py-3 rounded-lg transition-all shadow-lg text-center">
                    Back
                </a>
            </div>
        </div>
    );
};

export default ProfileCard;