const HeroSection = () => {
  return (
    <div className="bg-[#1F2937] text-[#F9FAF8]">
        <div className="container max-w-7xl p-4 mx-auto">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <img src="/images/logo.png" className="bg-white rounded-full p-2" alt="logo" />
                    <div className="border-r-2 border-yellow-500 border py-5"></div>
                    <div className="font-semibold text-2xl">Rockstar Games</div>
                </div>
                <div className="lg:hidden space-y-2 bg-[#FAFAFA] p-2 rounded hover:scale-105 duration-300">
                    <div className="border border-black border-b-2 w-6"></div>
                    <div className="border border-black border-b-2 w-6"></div>
                    <div className="border border-black border-b-2 w-6"></div>
                </div>
                <div className="hidden lg:inline-block">
                    <div className="flex space-x-6 text-lg text-[#E5E7EB]">
                        <div>Home</div>
                        <div>About</div>
                        <div>Contact</div>
                    </div>
                </div>
            </div>
            <div className="lg:flex my-24 space-y-4 lg:space-y-0 justify-between">
                <div className="lg:order-2 lg:w-1/2">
                    <img className="w-full h-full object-cover" src="/images/heroImage.jpg" alt="Red Dead Redemption 2" />
                </div>
                <div className="lg:w-2/5 lg:order-1 flex flex-col items-start justify-center space-y-3">
                    <div className="text-5xl font-extrabold">Killing <span className="text-yellow-500">dreams.</span> <span className="text-red-500">Murdering</span> hope. Fighting the <span className="text-blue-500"> righteous.</span> Bullying the weak.</div>
                    <div className="text-lg text-[#E5E7EB]">
                        MCMXCVIII
                    </div>
                    <button className="bg-[#3882F6] hover:bg-white duration-300 hover:text-black hover:scale-105 px-6 py-2 rounded">Sign up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
